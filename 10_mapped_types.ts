interface User {
	name: string;
	age: number;
	friends: string[];
	type: string;
}

interface Car {
	name: string;
	type: string;
}

interface RandomObj {
	name: string;
	type: string;
}

type OptionalType<T> = {
	readonly [K in keyof T]?: T[K] | null;
};

type EditType<T> = {
	-readonly [K in keyof T]-?: T[K] | null;
};

type NewUser = EditType<User>;

type ArrayAnalog<T> = {
	[K in string]: T;
};

// const array: ArrayAnalog<string> = ['1', '2', '3', 2];

type WithoutType<T> = {
	[K in keyof T as Exclude<K, 'type'>]: T[K];
};

// const withoutTypeUser: WithoutType<User> = {};
