import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import { history, configuredStore } from './store';
import './app.global.css';

const store = configuredStore();

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAi7DKn0_DeVKtPCRior6285AXPs0QpDxQ",
  authDomain: "tr-io-e0dda.firebaseapp.com",
  databaseURL: "https://tr-io-e0dda.firebaseio.com",
  projectId: "tr-io-e0dda",
  storageBucket: "tr-io-e0dda.appspot.com",
  messagingSenderId: "801676538089",
  appId: "1:801676538089:web:e2cc4a446bdb1760338078",
  measurementId: "G-GJLJCC5L8R"
};
firebase.initializeApp(config);

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line global-require
  const Root = require('./containers/Root').default;
  render(
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  );
});
