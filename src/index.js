import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/products.routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/api/products', productRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});



export default app;