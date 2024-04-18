import awsServerlessExpress from 'aws-serverless-express';
import app from './server.js';

const server = awsServerlessExpress.createServer(app);

export const handler = (event, context) => {
    return awsServerlessExpress.proxy(server, event, context);
};
