import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjQwMDAiLCJhdWQiOiJncmFwaHFsIiwic3ViIjoxLCJleHAiOjE2MDA5NzI0MzEsInVzZXJuYW1lIjoiZGFuaWVsIiwibmFtZSI6IkRhbmllbCBDb3N0YSIsImVtYWlsIjoiZGFuaWVsQGljYXJ1c2FjYWRlbXkuY29tLmJyIiwiaWF0IjoxNjAwODg2MDMxfQ.Pn6ChknYHJVERO8RwszqYbFkiGFxwDChlrLTAbffESI";

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });

const authLink = new ApolloLink((operation, forward) => {
    if(token) {
        operation.setContext({
            headers: {
                authorization: `Bearer ${token}`
            }
        })
    }
    return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;