import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppLazy from './AppLazy';

import { ApolloProvider } from '@apollo/client';

import client from './services/graphql';
import Login from './Login';

ReactDOM.render(
  <ApolloProvider client={client}>
    {/* <App /> */}
    {/* <AppLazy /> */}
    <Login />
  </ApolloProvider>,
  document.getElementById('root')
);
