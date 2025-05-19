// Литералы - конкретные значения, которые мы используем как тип

// Строковые литералы
type Color = 'red' | 'green' | 'blue';
const color: Color = 'red';

// Числовые литералы
type Size = 'small' | 'medium' | 'large';
const size: Size = 'small';

// Булевы литералы
type Bool = true | false; // Lol
const isAccess: Bool = false;

// Шаблонные строковые литералы
type PlayerID = `player_id_${number}`;
type Player = {
	id: PlayerID;
	name: string;
};

const Robert: Player = {
	id: `player_id_1`,
	name: 'Robert',
};

// Составные литералы
type Position = 'left' | 'right';
type Style = `${Position}-${Size}`; // 'left-small' | 'left-medium' | 'left-large' | 'right-small' | ...

const elementStyle: Style = 'left-small'; // OK
// const invalid: Style = 'top-huge'; // Error: not assignable to type 'Style'

type Prefix = 'user' | 'admin';
type ID = `${Prefix}-${number}`; // 'user-1' | 'user-2' | 'admin-1' | ...
const userId: ID = 'user-123'; // OK

//

// Примечания
// Поля объекта изменяемы, поэтому структурная типизация не работает
const values = {
	color: 'green', // Это значение можно изменить
} as const; // Даем понять TS, что values - не изменится (всем значениям устанавливается readonly)

// values.color = 'dioajioaj' <-- Не сработает

function paint(color: Color) {}

paint(values.color);
