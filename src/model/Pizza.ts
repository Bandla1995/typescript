import { DataResource } from '../services/DataResource';

export interface PizzaProps {
	title: string;
	description: string;
	price: number;
	toppings: string[];
}

export const Pizza = new DataResource<PizzaProps>(
	'http://localhost:3000/pizzas'
);
