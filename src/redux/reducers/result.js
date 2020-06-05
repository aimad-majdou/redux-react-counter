import * as actionTypes from '../../redux/actionTypes'

const initialState = {
    results: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SAVE :
            return {
                ...state,
                results: [...state.results, {
                    id: new Date(),
                    value: action.payload.result
                }]
            }
        case actionTypes.DELETE :
            return {
                ...state,
                results: state.results.filter(result => result.id !== action.payload.id)
            }
        default:
            return state;
    }
};
