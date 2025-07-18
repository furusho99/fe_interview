"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { Suspense, useState } from "react";
import { queryClient } from "@/lib/query-client";
import { ArticleCreateModal } from "./components/article-create-modal/article-create-modal";
import { ArticleCreateModalOpenButton } from "./components/article-create-modal-open-button/article-create-modal-open-button";
import { ArticleList } from "./components/article-list/article-list";
import { Button } from "./components/button/button";
import { container } from "./styles.css";

export default function Home() {
	const [isOpenArticleCreateModal, setIsOpenArticleCreateModal] =
		useState(false);
	return (
		<QueryClientProvider client={queryClient}>
			<div className={container}>
				<ArticleCreateModalOpenButton
					openModal={() => setIsOpenArticleCreateModal(true)}
				/>

				{/* {isOpenArticleCreateModal && ( */}
				<ArticleCreateModal
					closeModal={() => setIsOpenArticleCreateModal(false)}
				/>
				{/* )} */}

				<Suspense fallback={<div>Loading...</div>}>
					<ArticleList />
				</Suspense>
				<Button
					id="test-button"
					onClick={() => console.log("Button clicked")}
					type="button"
					styles={{ backgroundColor: "blue", color: "white" }}
				>
					Test Button
				</Button>
			</div>
		</QueryClientProvider>
	);
}
