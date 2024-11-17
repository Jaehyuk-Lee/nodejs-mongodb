import { Db } from './db';
import { User } from './schema';

export async function getUsers(): Promise<User[]> {
    const db = await Db.connect();
    return db.collection<User>('users').find().toArray();
}

export async function insertUser(user: User): Promise<void> {
    const db = await Db.connect();
    await db.collection('users').insertOne(user);
}

export async function insertUsers(users: User[]): Promise<void> {
    const db = await Db.connect();
    await db.collection('users').insertMany(users);
}

export async function updateUser(
    filter: object,
    update: object
): Promise<void> {
    const db = await Db.connect()
    await db.collection('users').updateOne(filter, update)
}

export async function updateUsers(
    filter: object,
    update: object
): Promise<void> {
    const db = await Db.connect()
    await db.collection('users').updateMany(filter, update)
}

export async function deleteUser(filter: object): Promise<void> {
    const db = await Db.connect()
    await db.collection('users').deleteOne(filter)
}

export async function deleteUsers(filter: object): Promise<void> {
    const db = await Db.connect()
    await db.collection('users').deleteMany(filter)
}

