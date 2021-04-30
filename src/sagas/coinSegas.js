import {FETCH_COINS,FETCH_SUCCEEDED,FETCH_FAILED} from '../actions/actionTypes';

//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './api';


function* fetchCoins() {
    try {
        const receivedCoins = yield Api.getCoinsFromApi();
        console.log(receivedCoins);
        yield put({ type: FETCH_SUCCEEDED, receivedCoins: receivedCoins });     
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchCoins() {
    yield takeLatest(FETCH_COINS, fetchCoins);
}

function* addNewCoin(action) {            
    try {
        const result = yield Api.insertNewCoinFromApi(action.newCoin);
        if (result === true) {
            yield put({ type: FETCH_COINS, sort: 'desc'});     
        }
    } catch (error) {        
        //do nothing
    }
}
export function* watchAddNewCoin() {            
    yield takeLatest(ADD_MOVIE, addNewCoin);
}