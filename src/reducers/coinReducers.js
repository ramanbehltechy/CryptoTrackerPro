import {ADD_COIN,FETCH_SUCCEEDED,FETCH_FAILED} from '../actions/actionTypes';

const coinReducers = (coins = [], action) => {
    switch (action.type) {
        case FETCH_SUCCEEDED:
            return action.receivedCoins;
        case FETCH_FAILED:
            return [];
        case ADD_COIN:
            return [
                ...coins,
                action.newCoin
            ];    
        default:
            return coins; //state does not change
    }
}

export default coinReducers;