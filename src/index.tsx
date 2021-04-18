import {ApolloProvider} from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import {client} from './lib/apollo.client';
import reportWebVitals from './reportWebVitals';
import Container from './styles/container';
import GlobalStyles from './styles/global-styles';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Container>
        <App />
      </Container>
      <GlobalStyles />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
