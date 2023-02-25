interface DatabaseService<T extends Entity> {
  save(entity: T): Promise<void>;
  getById(id: string): Promise<T>;
}