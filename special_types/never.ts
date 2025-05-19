// never - специальный тип. Не является супертипом, но является подтипом
// Самый узкий тип
// Если функция не может вернуть значение, то она возвращает never
// Или бесконечный цикл

function throwError(): never {
	throw new Error('');
}

// Это не работает! never - подтип. Мы не можем присвоить подтипу значение супертипу
let playerName: string = 'Robert'; // Супертип
let playerName2: never = playerName; // Подтип

// Это работает! never - подтип. Мы можем присвоить супертипу значение подтипа
let accountAge: never = throwError(); // Подтип
let accountAge2: string = accountAge; // Супертип

enum Values {
	FIRST,
	SECOND,
	THIRD,
}

function fn(value: Values) {
	switch (value) {
		case Values.FIRST:
			return value;
		case Values.SECOND:
			return value;
		default:
			const ex: never = value;
			return value;
	}
}
