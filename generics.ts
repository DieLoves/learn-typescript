interface Metadata {}

interface PlayerData {
	username: string;
}
interface Article {
	title: string;
	description: string;
}

// T - общепринятая конвенция
interface ApiResponse<Data, Meta> {
	status?: 'error' | 'success'; // Литералы
	meta?: Meta;
	requestId?: string;
	data: Data;
}

// PlayerData прокидывается в ApiResponse. data: T -> PlayerData
const response: ApiResponse<PlayerData, Metadata> = {
	data: {
		username: 'Aboba',
	},
};

// { timestamp: number } можно не выносить, если мы его не переиспользуем
// const responseArticle: ApiResponse<Article, { timestamp: number }> = {
interface MetaData {
	timestamp: number;
}
const responseArticle: ApiResponse<Article, MetaData> = {
	data: {
		title: '123',
		description: '456',
	},
};
