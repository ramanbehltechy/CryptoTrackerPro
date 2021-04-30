import { call, all } from 'redux-saga/effects';

import {watchFetchCoins} from './coinSegas';

export default function* rootSaga() {
    yield call(watchFetchCoins);              
}