import { db } from '../config/firebase.js';

const collection = db.collection('products');

export const getAll = async () => {
    const snapshot = await collection.get();
    return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    }));
};

export const getById = async (id) => {
    const doc = await collection.doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
};

export const create = async (data) => {
    const ref = await collection.add(data);
    return ref.id;
};

export const remove = async (id) => {
    await collection.doc(id).delete();
};

export const update = async (id, data) => {
    await collection.doc(id).update(data);
};