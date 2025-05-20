// Чтоб отличить типы друг от друга в union типе можно создать поле, которое будет одинаково во всех типах и через него делать проверки

interface BaseCar {
	maxSpeed: number;
	weight: number;
}

interface Bmw extends BaseCar {
	type: 'bmw';
	bmwField: string;
}

interface Audi extends BaseCar {
	type: 'audi';
	audiField: string;
}

type Car = Audi | Bmw;

function fn5(arg: Car) {
	// Проверяем по типам
	switch (arg.type) {
		case 'audi':
			arg.audiField;
			break;
		case 'bmw':
			arg.bmwField;
			break;
		default:
			const exCheck: never = arg;
			arg; // <-- Never
	}
}
