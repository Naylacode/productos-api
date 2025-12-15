import { users } from '../models/user.model.js';

export const validateUser = (email, password) => {
    return users.find(
    u => u.email === email && u.password === password
    );
};