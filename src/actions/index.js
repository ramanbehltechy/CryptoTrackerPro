import { ADD_COIN, FETCH_COINS,FETCH_FAILED,FETCH_SUCCEEDED } from './actionTypes';

export const fetchCoinsAction = (sort) => {
    return {
        type: FETCH_COINS,
        sort,
    }
}
export const addCoinAction = (newCoin) => {
    return {
        type: ADD_COIN,
        newCoin
    }
}

//Action sent by Redux-saga
export const fetchSuccessAction = (receivedCoins) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedCoins,
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error,
    }
}