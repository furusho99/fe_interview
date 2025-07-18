import { style } from "@vanilla-extract/css";

export const container = style({
	padding: 10,
	backgroundColor: "green",
	"@media": {
		"screen and (max-width: 600px)": {
			backgroundColor: "lightblue",
			border: "1px solid black",
		},
	},
});
