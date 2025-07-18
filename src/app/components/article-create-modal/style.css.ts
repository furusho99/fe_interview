import { style } from "@vanilla-extract/css";

export const container = style({
	padding: 10,
	backgroundColor: "white",
	// もっと良い方法があるかもしれない。あとまわし
	position: "absolute",
	top: "50%",
	left: "50%",
});
