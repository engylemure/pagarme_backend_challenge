// resolverMap.ts
import { IResolvers } from 'graphql-tools';
const resolverMap: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `👋 Hello world! 👋`;
    },
  },
  Mutation: {
    createTransaction(_: void, args: void): any {

    }
  }
};
export default resolverMap;