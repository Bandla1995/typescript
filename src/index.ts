// interface Author {
// 	name: string;
// 	avatar: string;
// }

// const authorOne: Author = { name: 'mario', avatar: '/img/mario.png' };

// interface Post {
// 	title: string;
// 	body: string;
// 	tags: string[];
// 	created_at: Date;
// 	author: Author;
// }

// const newPost = {
// 	title: 'my first post',
// 	body: 'something interesting',
// 	tags: ['gaming', 'tech'],
// 	created_at: new Date(),
// 	author: authorOne,
// };

// // as function argument types

// function createPost(post: Post) {
// 	console.log(`Created post ${post.title} by ${post.author.name}`);
// }
// createPost(newPost);

// // arrays

// let posts: Post[] = [];
// posts.push(newPost);

// type aliases

// type Rbg = [number, number, number];

// function getRandomColor(): Rbg {
// 	const r = Math.floor(Math.random() * 256);
// 	const g = Math.floor(Math.random() * 256);
// 	const b = Math.floor(Math.random() * 256);
// 	return [r, g, b];
// }

// const colorOne = getRandomColor();
// const colorTwo = getRandomColor();
// console.log(colorOne, colorTwo);

// // object literal

// type User = {
// 	name: string;
// 	score: number;
// };

// const userOne: User = {
// 	name: 'luigi',
// 	score: 100,
// };

// const userOne User = { name: 'mario', score: 75 }

// function formatUser(user: User) {

//     function formatUser{ user: User }: void {
//         console.log('${user.name} has a score of${user.scre}'   )
//     }

//     formatUser(userOne);
//     formatUser({})
// }

// // type gaurds

// type Id = number | string;

// function printId(id: Id) {
//     if (typeof id === 'string') {

//     }
// }

// // tagged interfaces

// interface User {
//     type: 'user'
//     name: string
//     email: string
//     id: Id
// }

// interface Person {
//     type: 'person'
//     firstname: string
//     age: number
//     id: Id
// }

// function logDetails{ value: User | Person }: void {
//     if(value.type === 'user'){
//     console.log(value.email, value.username)
// }
// if (value.type === 'person') {
//     console.log(value.firstname, value.age)
// }

// }
// reusable interfaces

// interface hasQuantity {
//     quantity: number
// }

// const something: hasQuantity = { quantity: 50 }

// function printQuantity( item: hasQuantity ): void {
//     console.log('the quantity if the item is ${item.quantity}')
// }
// const fruit = {
//     name: 'mango',
//     quantity: 50
// }
// const vehicle = {
//     type: 'car',
//     quantity: 3
// }
// const person = {
//     name: 'luigi',
//     age: 30
// }

// printQuantity(fruit)
// printQuantity(vehicle)
// printQuantity(person) // error

// function signatures

// function signtaures on interfaces

// interface HasArea {
//     name: string
//     calcArea (a: number) : number
// }

// const shapeOne: HasArea = {
//     name: 'square',
//     calcArea(_b: number) {
//         return 1 * 1
//     }
// }

// const shapeTwo: HasArea = {
//     name: 'circle',
//     calcArea(r: number) {
//         return Math.PI * r * r
//     }
// }

// extending interfaces

// interface HasFormatter {
// 	format(): string;
// }

// interface Bill extends HasFormatter {
// 	id: string | number;
// 	amount: number;
// 	server: string;
// }

// const user = {
// 	id: 1,
// 	format(): string {
// 		return 'This user has an id of ${this.id}';
// 	},
// };

// const bill = {
// 	id: 2,
// 	amount: 50,
// 	server: 'mario',
// 	format(): string {
// 		return '${this.server} owes $${this.amount} for bill #${this.id}';
// 	},
// };

// function printFormatted(val: HasFormatter): void {
// 	console.log(val.format());
// }

// function printBill(bill: Bill): void {
// 	console.log('server', bill.server);
// 	console.log(bill.format());
// }

// printFormatted(user);
// printFormatted(bill);

// extending type aliases

type Person = {
	id: string | number;
	firstName: string;
};

type User = Person & {
	email: string;
};

const personOne = {
	id: 1,
	firstName: 'mario',
};
const personTwo: User = {
	id: '2',
	firstName: 'luigi',
	email: 'benji@bebakho.com',
};
