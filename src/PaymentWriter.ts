import { CSVWriter } from './csvWriterRefactor';

interface Payment {
	id: number;
	amount: number;
	to: string;
	notes: string;
}

type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[];

const paymentWriter = new CSVWriter<Payment>(['id', 'amount', 'to', 'notes']);

paymentWriter.addRows([
	{ id: 1, amount: 100, to: 'Alice', notes: 'Payment for services' },
	{ id: 2, amount: 200, to: 'Bob', notes: 'Reimbursement' },
	{ id: 1, amount: 100, to: 'Alice', notes: 'Payment for services' },
]);
paymentWriter.save('payments.csv');
