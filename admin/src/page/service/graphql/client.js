import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "apollo-boost";
const httpLink = new HttpLink({
  uri: "http://172.28.144.1:3841/graphql"
});
export const client = new ApolloClient({
    httpLink,
    cache: new InMemoryCache()
  });