import { ApolloClient, InMemoryCache } from "@apollo/client"

const apolloClient = new ApolloClient({
    uri: 'http://13.250.50.27/',
    cache: new InMemoryCache()
})

export default apolloClient