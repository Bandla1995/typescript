export declare class CSVWriter<T> {
    private columns;
    constructor(columns: (keyof T)[]);
    private csv;
    save(filename: string): void;
    addRows(values: T[]): void;
    private formatRow;
}
//# sourceMappingURL=csvWriterRefactor.d.ts.map