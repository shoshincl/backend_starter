import merge from 'lodash/merge';
import { GraphQLSchema } from 'graphql';
import { IResolvers } from '@graphql-tools/utils';
import { makeExecutableSchema } from '@graphql-tools/schema';

import UserSchema from '../api/users/User.graphql';
import UserResolvers from './users/resolvers';

import ProfileSchema from '../api/profiles/Profile.graphql';
import ProfileResolvers from '../api/profiles/resolvers';

const typeDefs = [UserSchema, ProfileSchema];

const resolvers: IResolvers = merge(UserResolvers, ProfileResolvers);

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
