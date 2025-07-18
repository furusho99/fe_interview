import type { FC } from "react";
import { type ButtonInjectableStyles, button } from "./styles.css";

type Props = {
	id: string;
	onClick: () => void;
	type: "button" | "submit" | "reset";
	children: React.ReactNode; //string?
	styles?: ButtonInjectableStyles;
};

export const Button: FC<Props> = (props) => {
	return (
		<button
			type={props.type}
			id={props.id}
			onClick={props.onClick}
			className={props.styles ? button(props.styles) : button({})}
		>
			{props.children}
		</button>
	);
};
