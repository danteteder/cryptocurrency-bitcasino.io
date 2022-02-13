import React from 'react';
import ReactDOM from 'react-dom';
// add global styles so every component can access them
import './globalStyles.scss';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

// create an apollo client
const client = new ApolloClient({
  uri: 'https://api.blocktap.io/graphql',
  // create in memory cache to cache queries
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    {/* pass the apollo client to a provider, so it can be accessed by any component */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);