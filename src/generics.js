// function logAndReturnString(val: string): string {
// 	console.log(val);
// 	return val;
// }
const collectionOne = {
    data: ['Alice', 'Bob', 'Charlie'],
    name: 'User Names',
};
const collectionTwo = {
    data: [1, 2, 3, 4, 5],
    name: 'Numbers',
};
function randomCollectionItem(c) {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
}
const resultOne = randomCollectionItem(collectionOne);
const resultTwo = randomCollectionItem(collectionTwo);
console.log(resultOne);
console.log(resultTwo);
export {};
//# sourceMappingURL=generics.js.map