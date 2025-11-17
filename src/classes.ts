type Base = 'classic' | 'thick' | 'thin ' | 'garlic';

class MenuItem {
	constructor(private title: string, private price: number) {}
	get details(): string {
		return `${this.title} - $${this.price}`;
	}
}
class Pizza extends MenuItem {
	constructor(title: string, price: number) {
		super(title, price);
	}

	base: Base = 'classic';
	toppings: string[] = [];

	addTopping(topping: string): void {
		this.toppings.push(topping);
	}
	removeTopping(topping: string): void {
		this.toppings = this.toppings.filter((t) => t !== topping);
	}
	selectBase(b: Base): void {
		this.base = b;
	}
}

const pizzaOne: Pizza = new Pizza('Pepperoni', 15);

const pizzaTwo: Pizza = new Pizza('Margherita', 12);

pizzaOne.addTopping('Extra Cheese');
pizzaOne.addTopping('Olives');

function addMushroomsToPizzas(pizzas: Pizza[]): void {
	for (const p of pizzas) {
		p.addTopping('Mushrooms');
	}
}

addMushroomsToPizzas([pizzaOne, pizzaTwo]);

function printMenuItem(item: MenuItem): void {
	console.log(item.details);
}

printMenuItem(pizzaOne);
