interface Person2 {
	name: string;
	address?: {
		street: string;
	};
	getAge?: () => number;
	array?: string[];
}

// Optional chaining (?.)
// Позволяет безопасно обращаться к свойствам объекта, которые могут быть неопределенными или нулевыми.
// Если свойство не существует, то вернется undefined, а не ошибка.
function prepareUser(user: Person2) {
	// console.log(user.address?.street?.player?.kdaokd); // undefined
	console.log(user.getAge?.()); // undefined
	console.log(user.array?.[0]); // undefined
}

// Nщт null assertion (!.)
// Позволяет указать компилятору TypeScript, что значение не будет null или undefined.
// Мы точно уверены, что значение существует, и не хотим проверять его на null или undefined.
// Если значение все же окажется null или undefined, то будет выброшено исключение во время выполнения.
// НЕ ИСПОЛЬЗОВАТЬ В ПРОДАКШЕНЕ
function prepareUser2(user: Person2) {
	console.log(user.address!.street); // Ошибка во время выполнения, если address или street не существует
}

prepareUser2({
	name: 'DL',
});
