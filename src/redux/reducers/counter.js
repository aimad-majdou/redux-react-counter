import * as actionTypes from '../../redux/actionTypes'

const initialState = {
    counter: 0
};

export default function(state = initialState, action) {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT :
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.INC_VALUE :
            return {
                ...state,
                counter: state.counter + action.payload.value
            }
        case actionTypes.DEC_VALUE :
            return {
                ...state,
                counter: state.counter - action.payload.value
            }
        default:
            return state;
    }
};
