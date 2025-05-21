interface User {
	name: string;
	age: number;
	type: string;
	friends: Array<string>;
}

// Pick
// Позволяет создать новый тип, выбирая только определенные свойства из существующего типа.
type NewUser = Pick<User, 'name' | 'friends'>;

// Omit
// Позволяет создать новый тип, исключая определенные свойства из существующего типа.
type NewUser2 = Omit<User, 'type' | 'age'>;

// Exclude / Extract
// Exclude позволяет исключить определенные типы из объединения типов.
// Extract позволяет извлечь определенные типы из объединения типов.
type Color = 'red' | 'green' | 'blue' | 'yellow';

type ExcludedColor = Exclude<Color, 'red' | 'green'>; // 'blue' | 'yellow'
