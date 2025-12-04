"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class csvWriter {
    columns;
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(',') + '\n';
    }
    csv;
    save(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = '\n';
        console.log(`file saved as ${filename}`);
    }
    addRows(values) {
        let rows = values.map((v) => this.formatRow(v));
        this.csv += rows.join('\n') + '\n';
        console.log(this.csv);
    }
    formatRow(p) {
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
//# sourceMappingURL=csvWriter.js.map