import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";
import type { Article } from "../article";

export const useArticleCreate = () => {
	const { mutate } = useMutation({
		mutationFn: requestForCreatingArticle,
		onSuccess: (data: Article) => {
			queryClient.setQueryData(
				["articleList"],
				(oldData: Article[] | undefined) => {
					if (!oldData) return [data];
					return [data, ...oldData];
				},
			);
		},
		//時間があればoptimistic updateを実装する
		onError: (error: Error) => {
			console.error("Error creating article:", error);
			// エラーハンドリングの処理を追加できます
		},
	});

	return {
		createArticle: (articleData: { title: string; body: string }) => {
			mutate(articleData);
		},
	};
};

//戻り値anyなので、なんとかする
const requestForCreatingArticle = async (articleData: {
	title: string;
	body: string;
}) => {
	const response = await fetch(
		"https://asia-northeast1-praha-test.cloudfunctions.net/createPost",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(articleData),
		},
	);

	if (!response.ok) {
		throw new Error("Failed to create article");
	}

	const data = await response.json();
	return data;
};
