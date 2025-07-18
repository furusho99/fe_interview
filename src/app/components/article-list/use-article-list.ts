import { useSuspenseQuery } from "@tanstack/react-query";

type Article = {
	id: number;
	title: string;
	body: string;
	createdAt: string;
	createdBy: string;
	isFavorite: boolean; //おきに入りでmutateする
};

export const useArticleList = (): Article[] => {
	const { data } = useSuspenseQuery({
		queryKey: ["articleList"],
		queryFn: fetchArticleList,
	});
	return data;
};

const fetchArticleList = async (): Promise<Article[]> => {
	const response = await fetch(
		"https://asia-northeast1-praha-test.cloudfunctions.net/getPosts",
	);
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	const data = await response.json();
	return data.data;
};
