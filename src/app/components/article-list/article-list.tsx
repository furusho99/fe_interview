import {
	artcleInnerTop,
	artcleInnerTopLeft,
	articleCreateDate,
	articleTitle,
	aticleInnerTopTitle,
} from "./style.css";
import { useArticleList } from "./use-article-list";

export const ArticleList = () => {
	const articles = useArticleList();
	return (
		<li>
			{articles.map((article) => (
				<div key={article.id}>
					<div className={artcleInnerTop}>
						<div className={artcleInnerTopLeft}>
							<div>profile image</div>
							<div className={aticleInnerTopTitle}>
								<p className={articleCreateDate}>
									{new Date(article.createdAt).toLocaleDateString()}
								</p>
								<h2 className={articleTitle}>{article.title}</h2>
							</div>
						</div>
						<button
							className={""} // Assuming this is a class for styling the button
							type="button"
							onClick={() => {
								console.log(article.isFavorite ? "Unfavorited" : "Favorited");
							}}
						>
							{article.isFavorite ? "Unfavorite" : "Favorite"}
						</button>
					</div>
					<p>{article.body}</p>

					{/* <button>{article.isFavorite ? "Unfavorite" : "Favorite"}</button> */}
				</div>
			))}
		</li>
	);
};
