class MongoDBService<T extends Entity> {
  private connection: string;

  constructor(private collectionName: string) {
    this.connection = `mongodb://localhost/${collectionName}`;
  }

  async saveEntity(entity: T, paySummary: PaySummary): Promise<void> {
    const client = await MongoClient.connect(this.connection);
    const db = client.db();
    const collection = db.collection(this.collectionName);

    const document = {
      id: entity.id,
      paySummary: paySummary,
      // Include any other properties you want to save here
    };

    await collection.insertOne(document);
    await client.close();
  }
}