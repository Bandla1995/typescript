"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MenuItem {
    title;
    price;
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} - $${this.price}`;
    }
    format() {
        return `this menu item is called ${this.title} and costs $${this.price}`;
    }
}
class Pizza extends MenuItem {
    // the inheritance of a class happens here with the extension
    constructor(title, price) {
        super(title, price);
    }
    base = 'classic';
    toppings = [];
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
}
const pizzaOne = new Pizza('Pepperoni', 15);
// const pizzaTwo: Pizza = new Pizza('Margherita', 12);
// pizzaOne.addTopping('Extra Cheese');
// pizzaOne.addTopping('Olives');
// function addMushroomsToPizzas(pizzas: Pizza[]): void {
// 	for (const p of pizzas) {
// 		p.addTopping('Mushrooms');
// 	}
// }
// addMushroomsToPizzas([pizzaOne, pizzaTwo]);
// function printMenuItem(item: MenuItem): void {
// 	console.log(item.details);
// }
// printMenuItem(pizzaOne);
function printFormatted(val) {
    console.log(val.format());
}
printFormatted(pizzaOne);
//# sourceMappingURL=classes.js.map