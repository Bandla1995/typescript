import { appendFileSync, writeFileSync } from 'fs';

interface Payment {
	id: number;
	amount: number;
	to: string;
	notes: string;
}

type PaymentColummns = ('id' | 'amount' | 'to' | 'notes')[];

class csvWriter {
	constructor(private columns: PaymentColummns) {
		this.csv = this.columns.join(',') + '\n';
	}
	private csv: string;

	save(filename: string): void {
		appendFileSync(filename, this.csv);
		this.csv = '\n';

		console.log(`file saved as ${filename}`);
	}

	addRows(values: Payment[]): void {
		let rows = values.map((v) => this.formatRow(v));
		this.csv += rows.join('\n') + '\n';
		console.log(this.csv);
	}

	private formatRow(p: Payment): string {
		return this.columns.map((col) => p[col]).join(',');
	}
}

const writer = new csvWriter(['id', 'amount', 'to', 'notes']);

writer.addRows([
	{ id: 1, amount: 250, to: 'mario', notes: 'for work completed' },
	{ id: 2, amount: 300, to: 'luigi', notes: 'for web design' },
	{ id: 3, amount: 400, to: 'yoshi', notes: 'for consultancy' },
]);

writer.save('./payments.csv');
