import { MongoClient } from 'mongodb';

export class Db {
    static async connect() {
        const client = await MongoClient.connect(
            'mongodb://localhost:27017',
        );
        return client.db('ts-mongodb');
    }
}
