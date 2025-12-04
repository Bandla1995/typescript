// function logAndReturnString(val: string): string {
// 	console.log(val);
// 	return val;
// }

// function logAndReturnNumber(val: number): number {
// 	console.log(val);
// 	return val;
// }
// function logAndReturnBoolean(val: boolean): boolean {
// 	console.log(val);
// 	return val;
// }

// function logAndReturnValue<T>(val: T): T {
// 	console.log(val);
// 	return val;
// }

// const resultOne = logAndReturnValue<string>('Hello Generics');
// const resultTwo = logAndReturnValue<number>(42);
// const resultThree = logAndReturnValue<boolean>(true);

// EXAMPLE 2

// function getRandomArrayValue<T>(values: T[]): T {

// 	const i = Math.floor(Math.random() * values.length);
// 	return values[i];
// }

// interface User {
// 	id: number;
// 	name: string;
// }

// const users: User[] = [
// 	{ id: 1, name: 'Alice' },
// 	{ id: 2, name: 'Bob' },
// 	{ id: 3, name: 'Charlie' },
// 	{ id: 4, name: 'David' },
// ];

// const randomUser = getRandomArrayValue<User>(users);
// console.log(randomUser);

// intersection types example
// interface HasID {
//     id: number;
// }

// function addIdToValve<T>(val: T): T & HasID {
//     const id = Math.random()

//     return {...val, id}
// }

// interface Post{
//     title: string
//     thumbsUp: number
// }

// const post = addIdToValve<Post>({title: 'My Post', thumbsUp: 100});
// console.log(post.id);
// console.log(post.title);
// console.log(post.thumbsUp);
// console.log(post);

// Generic interfaces example
// interface Collection<T> {
// 	data: T[];
// 	name: string;
// }

// const collectionOne: Collection<string> = {
// 	data: ['Alice', 'Bob', 'Charlie'],
// 	name: 'User Names',
// };

// const collectionTwo: Collection<number> = {
// 	data: [1, 2, 3, 4, 5],
// 	name: 'Numbers',
// };

// function randomCollectionItem<T>(c: Collection<T>): T {
// 	const i = Math.floor(Math.random() * c.data.length);
// 	return c.data[i]!;
// }

// const resultOne = randomCollectionItem<string>(collectionOne);
// const resultTwo = randomCollectionItem<number>(collectionTwo);

// console.log(resultOne);
// console.log(resultTwo);

// Generica Classes

// class DataCollection<T> {
// 	constructor(private data: T[]) {}

// 	loadOne(): T {
// 		const i = Math.floor(Math.random() * this.data.length);
// 		return this.data[i]!;
// 	}
// 	loadAll(): T[] {
// 		return this.data;
// 	}
// 	add(val: T): T[] {
// 		this.data.push(val);
// 		return this.data;
// 	}
// }

// interface User {
// 	id: number;
// 	name: string;
// }

// const users = new DataCollection<User>([
// 	{ id: 1, name: 'Alice' },
// 	{ id: 2, name: 'Bob' },
// 	{ id: 3, name: 'Charlie' },
// ]);

// users.add({ id: 4, name: 'David' });

// // const user = users.loadOne();
// // const allUsers = users.loadAll();

// console.log('load one -', users.loadOne());
// console.log('load all -', users.loadAll());

// Generic Contarimts

//---------------------
// Generic Constraints
//---------------------

interface HasId {
	id: number;
}

class DataCollection<T extends HasId> {
	constructor(private data: T[]) {}

	loadOne(): T {
		const i = Math.floor(Math.random() * this.data.length);
		return this.data[i]!;
	}
	loadAll(): T[] {
		return this.data;
	}
	add(val: T): T[] {
		this.data.push(val);
		return this.data;
	}
	deleteOne(id: number): void {
		this.data = this.data.filter((item) => item.id !== id);
	}
}

interface User {
	name: string;
	score: number;
	id: number;
}

const users = new DataCollection<User>([
	{ name: 'shaun', score: 125, id: 1 },
	{ name: 'mario', score: 100, id: 2 },
	{ name: 'peach', score: 150, id: 3 },
]);

users.deleteOne(2);
console.log('load all - ', users.loadAll());
