import * as mongodb from 'mongodb';

class MongoDBService<T extends Entity> implements DatabaseService<T> {
  async save(entity: T): Promise<void> {
    console.log(`Saving entity with id: ${entity.id}`);
    // Implementation to save to MongoDB...
  }

  async getById(id: string): Promise<T> {
    console.log(`Retrieving entity with id: ${id}`);
    // Implementation to retrieve from MongoDB...
    return {} as T;
  }
}