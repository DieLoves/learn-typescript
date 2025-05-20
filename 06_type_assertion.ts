interface Person {
	age: number;
	username: string;
	password: string;
}

// Использовать Type Assertion на продакшене не рекомендуется
const obj = {
	age: 20,
	username: 'Robert',
	// Без password рандомные поля будут вызывать ошибку, т.к. типы не будут в достаточной мере перекрывать друг друга
	password: 'ddd',
	// Можем любую фигню писать. Главное, чтоб по полям все совпало
	wkdopqkopdkq: 123,
	dkjaidjqiodjioqjd: 213,
} as Person;

// Валидно, но не в JSX
const obj2 = <Person>{
	age: 20,
	username: 'Robert',
};

// TypeScript 4.9
// Без явного преобразование. Идет просто проверка
const obj3 = {
	age: 20,
	username: 'Robert',
	password: 'dddd',
} satisfies Person;

function JSONParse<T>(data: string): T {
	return JSON.parse(data) as T;
}
const parsedJSON = JSONParse<Person>('{age: 25}');

async function fn7() {
	const data = await fetch('');
	const parsedData: Person = await data.json();
}

const PersonKeys = {
	age: 'age',
	username: 'username',
	password: 'password',
} as const;

function keysInObject<T extends object>(data: T): Array<keyof T> {
	return Object.keys(data) as Array<keyof T>;
}

const k = keysInObject(PersonKeys);
