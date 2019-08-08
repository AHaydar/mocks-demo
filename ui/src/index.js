import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import Characters from './components/Characters';

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="app-container">
      <Characters />
    </div>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
