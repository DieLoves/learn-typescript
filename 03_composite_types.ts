interface Address {
	city: string;
	street: string;
	cords: number[];
}

type User = {
	firstName: string;
	age: number;
	address: Address;
};

const users: User[] = [];

function createUser(userData: User) {
	users.push(userData);
}
