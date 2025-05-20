interface Metadata {}

interface PlayerData {
	username: string;
}
interface Article {
	title: string;
	description: string;
}

interface Tree<T> {
	id: string;
	value: T;
	children: Tree<T>[] | null;
}

const treeNode: Tree<PlayerData> = {
	id: '10',
	value: {
		username: 'Robert',
	},
	children: [
		{
			id: '20',
			value: {
				username: 'Vasya',
			},
			children: null,
		},
		{
			id: '30',
			value: {
				username: 'Masha',
			},
			children: null,
		},
	],
};

function genericFn<T>(arg: T) {}

// Ограничения в Generic
function createEntity<T extends { id: string; createdAt: Date }>(arg: T) {}

// Type 'PlayerData' does not satisfy the constraint '{ id: string; createdAt: Date; }'.
// createEntity<PlayerData>({ username: 'Vasya' });

const arrowGeneric = <T>(arg: T): T => {
	return arg;
};

const data = arrowGeneric<PlayerData>({ username: 'Robert' });

// class Order<T> {
// 	data: T;

// 	constructor(arg: T) {
// 		this.data = arg;
// 	}
// }

interface ApiResponse<Data = string> {
	data: Data;
}

const response: ApiResponse = {
	data: 'ok',
};

// // T - общепринятая конвенция
// interface ApiResponse<Data, Meta> {
// 	status?: 'error' | 'success'; // Литералы
// 	meta?: Meta;
// 	requestId?: string;
// 	data: Data;
// }

// // PlayerData прокидывается в ApiResponse. data: T -> PlayerData
// const response: ApiResponse<PlayerData, Metadata> = {
// 	data: {
// 		username: 'Aboba',
// 	},
// };

// // { timestamp: number } можно не выносить, если мы его не переиспользуем
// // const responseArticle: ApiResponse<Article, { timestamp: number }> = {
// interface MetaData {
// 	timestamp: number;
// }
// const responseArticle: ApiResponse<Article, MetaData> = {
// 	data: {
// 		title: '123',
// 		description: '456',
// 	},
// };
