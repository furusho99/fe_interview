import type { FC } from "react";
import { useForm } from "react-hook-form";
import { ArticleCreateModalCloseButton } from "../article-create-modal-close-button/article-create-modal-close-button";
import { useArticleCreate } from "../article-create-modal-open-button/use-article-create";
import { container } from "./style.css";

type Props = {
	closeModal: () => void;
};

// ページコンポーネントの最上部のelementにrelativeつける
export const ArticleCreateModal: FC<Props> = (props) => {
	const { register, formState, handleSubmit } = useForm({
		defaultValues: {
			title: "",
			content: "",
		},
	});

	const { createArticle } = useArticleCreate();

	return (
		<div className={container}>
			<ArticleCreateModalCloseButton closeModal={props.closeModal} />
			<h2>Create New Article</h2>
			<form
				onSubmit={handleSubmit((data) => {
					createArticle({
						title: data.title,
						body: data.content,
					});
				})}
			>
				<label htmlFor="title">
					Title:
					<input type="text" id="title" {...register("title")} required />
					{formState.errors.title && (
						<span className="">{formState.errors.title.message}</span>
					)}
				</label>
				<label htmlFor="content">
					Content:
					<textarea id="content" {...register("content")} required></textarea>
					{formState.errors.content && (
						<span className="">{formState.errors.content.message}</span>
					)}
				</label>
				<button type="submit">Create</button>
			</form>
		</div>
	);
};
