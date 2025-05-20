// any - специальный тип. Является надтипом и подтипом для всех типов
// Все проверки типов убираются
// Если TS не смог распознать тип, то он автоматически становится any
// Не рекомендуется использовать на продакшене

// TS не жалуется на пример ниже
let value: any;
value = 'abc';
value = 123;
value = true;
value = [1, 2, 3];

// Это работает! Any тут подтип
const userName: string = 'Vasya';
const userName2: any = userName;

// Это тоже!! Any тут супертип
const userAge: any = 25;
const userAge2: number = userAge;
