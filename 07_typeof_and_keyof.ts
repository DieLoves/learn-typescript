const obj = {
	name: 'DL',
	age: 25,
};

type Person = typeof obj;

let color = 'red' as const;

// Извлечет как литерал
// Важно, чтоб color нельзя было переопределить, иначе вместо литерала будет просто string
type RedColor = typeof color;

function getData(user: Person): number {
	return 5;
}

// Получаем тип аргумента и тип возвращающегося объекта
type GetDataFn = typeof getData;

// Utility Type
// Тип возвращающегося объекта
type GetDataReturnValue = ReturnType<typeof getData>;
// Тип аргумента
type GetDataParams = Parameters<typeof getData>;

// --- Keyof ---
// Берем тип у объекта и берем его ключи
type PersonKey = keyof typeof obj;

// arg: T, key: K заполняя аргументы мы заполняем Generics (механизмом вывода типов (type inference))
function getByKey<T, K extends keyof T>(arg: T, key: K): T[K] {
	return arg[key];
}

getByKey(obj, 'age');
