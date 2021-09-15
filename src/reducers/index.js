import { combineReducers } from "redux"
import counter from './counter';
import bc from './bc';

const reducers = combineReducers({
    counter, bc
})

export default reducers;