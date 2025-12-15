import * as service from '../services/products.service.js';

export const getAllProducts = async (req, res) => {
    const products = await service.getAll();
    res.json(products);
};

export const getProductById = async (req, res) => {
    const product = await service.getById(req.params.id);
    product
    ? res.json(product)
    : res.status(404).json({ error: 'Producto no encontrado' });
};

export const createProduct = async (req, res) => {
    const id = await service.create(req.body);
    res.status(201).json({ id });
};

export const deleteProduct = async (req, res) => {
    await service.remove(req.params.id);
    res.json({ message: 'Producto eliminado' });
};

export const updateProduct = async (req, res) => {
    await service.update(req.params.id, req.body);
    res.json({ message: 'Producto actualizado' });
};