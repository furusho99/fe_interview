//あとで移動
export type Article = {
	id: number;
	title: string;
	body: string;
	createdAt: string;
	createdBy: string;
	isFavorite: boolean; //おきに入りでmutateする
};
