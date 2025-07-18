import { style } from "@vanilla-extract/css";

export const articleTitle = style({
	fontWeight: "bold",
	fontSize: 20,
	margin: 0,
});

export const artcleInnerTop = style({
	display: "flex",
	gap: 10, //tmp
	justifyContent: "space-between",
});

export const artcleInnerTopLeft = style({
	display: "flex",
	gap: 16,
});

export const aticleInnerTopTitle = style({
	display: "flex",
	flexDirection: "column",
	gap: 8,
});

export const articleCreateDate = style({
	margin: 0,
});

export const makeArticleFavoriteButton = style({
	borderRadius: 5,
});
