import { style } from "@vanilla-extract/css";

export type ButtonInjectableStyles = {
	fontSize?: string;
	color?: string;
	backgroundColor?: string;
};

export const button = ({
	fontSize,
	color,
	backgroundColor,
}: ButtonInjectableStyles) =>
	style({
		borderRadius: 2,
		padding: 12,
		border: "none",
		cursor: "pointer",
		fontSize: fontSize || "16px",
		color: color || "white",
		backgroundColor: backgroundColor || "blue",
	});
