import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
});
app.use('*', cors());
app.use(compression());
server.applyMiddleware({ app, path: '/graphql' });
const httpServer = createServer(app);

const serverPort = parseInt(process.env.SERVER_PORT || '4000')
httpServer.listen(
  { port: serverPort },
  (): void => console.log(`\n🚀      GraphQL is now running on http://localhost:${serverPort}/graphql`));