// resolverMap.ts
import { IResolvers } from 'graphql-tools';
import {TransactionInt, Transaction, validateCreateTransaction} from "./business/transaction";

const resolverMap: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `👋 Hello world! 👋`;
    },
    transactions(_: void, args: void): Transaction[] {
      return []
    }
  },
  Mutation: {
    createTransaction(_: void, args: { input: TransactionInt }): any {
      return validateCreateTransaction(args.input)
    }
  }
};
export default resolverMap;