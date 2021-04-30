import { connect } from 'react-redux';

import CoinComponent from '../components/CoinComponent';

import {fetchCoinsAction,addCoinAction} from '../actions';

const mapStateToProps = (state) => {        
    return {        
        coins : state.coinReducers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {    
        onFetchCoins: () => {                        
            dispatch(fetchCoinsAction());
        },
        onAddCoin: (newCoin) => {                        
            dispatch(addCoinAction(newCoin));
        }
    };
}

const CoinContainer = connect(mapStateToProps, mapDispatchToProps)(CoinComponent);
export default CoinContainer;