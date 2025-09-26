"use strict";
// interface Author {
// 	name: string;
// 	avatar: string;
// }
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 1,
    format() {
        return 'This user has an id of ${this.id}';
    },
};
const bill = {
    id: 2,
    amount: 50,
    server: 'mario',
    format() {
        return '${this.server} owes $${this.amount} for bill #${this.id}';
    },
};
function printFormatted(val) {
    console.log(val.format());
}
function printBill(bill) {
    console.log('server', bill.server);
    console.log(bill.format());
}
printFormatted(user);
printFormatted(bill);
//# sourceMappingURL=index.js.map