import * as Product from '../models/product.model.js';

export const getAll = () => Product.getAll();
export const getById = (id) => Product.getById(id);
export const create = (data) => Product.create(data);
export const remove = (id) => Product.remove(id);
export const update = (id, data) => Product.update(id, data);
