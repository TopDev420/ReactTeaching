import * as types from '../actions/ActionTypes';

const initialState = {
    color: [255, 255, 255]
};

export default function bc(state = initialState, action) {
    //later
    if (action.type === types.SET_COLOR) {
        return {
            color: action.color
        };
    } else {
        return state;
    }
}