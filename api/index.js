import serverless from 'serverless-http';
import app from '../src/index.js'; // tu app Express

export const handler = serverless(app);