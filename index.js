/**
 * @format
 */

 import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './src/reducers';

import CoinContainer from './src/containers/CoinContainer';

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/rootSaga'; 

const sagaMiddleware = createSagaMiddleware();


let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

const App = () => (
    <Provider store={store}>
        <CoinContainer />
    </Provider>
);

sagaMiddleware.run(rootSaga);
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
