import cors from 'cors';
import express from 'express';

import { ApolloServer } from 'apollo-server-express';
import { graphqlUploadExpress } from 'graphql-upload';
import { PrismaClient } from '@prisma/client';

import { schema } from './api/schema';

(async function init() {
  const prisma = new PrismaClient();
  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({
      headers: req.headers,
      domain: req.headers['apollographql-client-name'],
      prisma: prisma,
    }),
  });
  await server.start();
  const app = express();
  app.use(
    '/graphql',
    cors({
      origin: '*',
      methods: ['POST', 'GET'],
    }),
    graphqlUploadExpress()
  );
  server.applyMiddleware({
    app,
    cors: true,
    path: '/graphql',
    bodyParserConfig: {
      limit: '20mb',
    },
  });
  app.listen(process.env.APP_PORT, () => {
    console.log(
      `GRAPHQL API URL http://localhost:${process.env.APP_PORT}/graphql`
    );
  });
})();
