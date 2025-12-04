export class DataResource<T> {
	constructor(private endpoint: string) {}

	async loadAll() {}
	async loadOne(id: string) {}
	async save(id: T) {}
	async delete(id: number) {}
}
