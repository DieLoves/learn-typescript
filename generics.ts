// --- Интерфейсы данных ---

interface Metadata {}

interface PlayerData {
	username: string;
}

interface Article {
	title: string;
	description: string;
}

// --- Обобщённое дерево ---

interface Tree<T> {
	id: string;
	value: T;
	children: Tree<T>[] | null;
}

// Пример использования Tree с PlayerData
const playerTree: Tree<PlayerData> = {
	id: '10',
	value: { username: 'Robert' },
	children: [
		{
			id: '20',
			value: { username: 'Vasya' },
			children: null,
		},
		{
			id: '30',
			value: { username: 'Masha' },
			children: null,
		},
	],
};

// --- Обобщённые функции ---

// Простая обобщённая функция
function genericFn<T>(arg: T): void {
	// ...
}

// Ограничение generic-параметра
function createEntity<T extends { id: string; createdAt: Date }>(arg: T): void {
	// ...
}

// Пример: вызов с PlayerData вызовет ошибку, т.к. не хватает id и createdAt
// createEntity<PlayerData>({ username: 'Vasya' }); // Ошибка

// Обобщённая стрелочная функция
const arrowGeneric = <T>(arg: T): T => arg;

// Пример использования arrowGeneric
const player = arrowGeneric<PlayerData>({ username: 'Robert' });

// --- Обобщённые интерфейсы ---

// Интерфейс ответа API с дефолтным типом данных
interface ApiResponse<Data = string> {
	data: Data;
}

// Пример: строка по умолчанию
const stringResponse: ApiResponse = {
	data: 'ok',
};

// Пример: данные игрока
const playerResponse: ApiResponse<PlayerData> = {
	data: { username: 'Aboba' },
};

// Пример: данные статьи с метаданными
interface ArticleMeta {
	timestamp: number;
}

const articleResponse: ApiResponse<Article> & { meta: ArticleMeta } = {
	data: {
		title: '123',
		description: '456',
	},
	meta: {
		timestamp: Date.now(),
	},
};

// --- Обобщённый класс ---

class Order<T> {
	data: T;

	constructor(arg: T) {
		this.data = arg;
	}
}

// Пример использования Order
const order = new Order<PlayerData>({ username: 'Ivan' });

// --- Условная конструкция в Generic ---

type isArray<T> = T extends any[] ? true : false;

const first: isArray<string> = false;

type RandomName<T> = T extends PlayerData
	? { value: PlayerData }
	: { value: string };

const third: RandomName<number> = {};
