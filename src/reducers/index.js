import { combineReducers } from 'redux';

import coinReducers from './coinReducers';

const allReducers = combineReducers({
    coinReducers,
    //you can add more reducers here, separated by , !
});
export default allReducers;