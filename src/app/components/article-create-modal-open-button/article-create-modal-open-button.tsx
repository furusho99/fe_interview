// import { ArticleCreateModal } from './article-create-modal';

import type { FC } from "react";

type Props = {
	openModal: () => void;
};

export const ArticleCreateModalOpenButton: FC<Props> = (props) => {
	return (
		<button
			type="button"
			onClick={() => {
				props.openModal();
			}}
		>
			+
		</button>
	);
};
