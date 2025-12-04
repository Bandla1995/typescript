"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csvWriterRefactor_1 = require("./csvWriterRefactor");
const paymentWriter = new csvWriterRefactor_1.CSVWriter(['id', 'amount', 'to', 'notes']);
paymentWriter.addRows([
    { id: 1, amount: 100, to: 'Alice', notes: 'Payment for services' },
    { id: 2, amount: 200, to: 'Bob', notes: 'Reimbursement' },
    { id: 1, amount: 100, to: 'Alice', notes: 'Payment for services' },
]);
paymentWriter.save('payments.csv');
//# sourceMappingURL=PaymentWriter.js.map