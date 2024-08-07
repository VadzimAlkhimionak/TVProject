import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const cache = new InMemoryCache({})

const link = new HttpLink({
    uri: 'https://sprintty.com/site/graphql',
    headers: {
        'X-ARENA-SLUG': 'roku-demo'
    }
})

export const client = new ApolloClient({
    link,
    cache
});
