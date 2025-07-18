// import { ArticleCreateModal } from './article-create-modal';

import type { FC } from "react";

//pageコンポーネントでstateを管理しているため、props drillingせざるを得ない
type Props = {
	closeModal: () => void;
};

export const ArticleCreateModalCloseButton: FC<Props> = (props) => {
	return (
		<button
			type="button"
			onClick={() => {
				props.closeModal();
			}}
		>
			x
		</button>
	);
};
