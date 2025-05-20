function fn2(arg: number | string | null, args2: number) {
	if (arg === null) {
		// Работаем с arg как с null
	}

	if (arg === args2) {
		// Работаем с arg как с числом
	}

	if (arg === '123') {
		// Работаем с arg как с литералом "123"
	}

	return arg;
}

//

interface User {
	username: string;
	age: number;
}

interface Person {
	lastName: string;
	firstName: string;
	age: number;
}

interface Article {
	title: string;
}

function fn3(arg: User | Person | Article) {
	// Есть ли в объекте arg поле username
	// TypeScript автоматически определит из всех типов тот, в котором есть это поле
	if ('username' in arg) {
		// Работаем тут как с User
		arg;
	}

	if ('firstName' in arg) {
		// Работаем тут как с Person
		arg;
	}

	if ('age' in arg) {
		// Никак тут не работаем. Тип User | Person
	}
}

class Bmw {
	bmwDrive() {}
}

class Audi {
	audiDrive() {}
}

const bmw = new Bmw();
const audi = new Audi();

function fn4(arg: Bmw | Audi) {
	if (arg instanceof Bmw) {
		arg.bmwDrive();
	} else if (arg instanceof Audi) {
		arg.audiDrive();
	}
}
