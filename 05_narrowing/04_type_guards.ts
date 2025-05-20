interface Car2 {
	maxSpeed: number;
	weight: number;
}

interface Person {
	age: number;
	name: string;
}

// value is Car - значение является Car
function isCar(value: Car | Person): value is Car {
	return 'maxSpeed' in value && 'weight' in value;
}

function isBmw(value: Bmw | Audi): value is Bmw {
	return value.type === 'bmw';
}

function isPerson(value: Car | Person): value is Person {
	return 'age' in value && 'name' in value;
}

function fn6(data: Car | Person) {
	if (isCar(data)) {
		// Тут мы будем работать с Car. С помощью TypeGuard (value is Car) мы помогли понять TypeScript является ли это нужным типом
	} else {
		// TypeScript поймет: раз это не Car, то второй тип в списке union. В нашем случае - Person
	}
}
