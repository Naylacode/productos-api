import { validateUser } from '../services/auth.service.js';
import { generateToken } from '../utils/jwt.js';

export const login = (req, res) => {
    const { email, password } = req.body;

    const user = validateUser(email, password);

    if (!user) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = generateToken({ email });
    res.json({ token });
};