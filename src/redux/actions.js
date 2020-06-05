import * as actionTypes from './actionTypes';

export const increment = () => ({
    type: actionTypes.DECREMENT
});

export const decrement = () => ({
    type: actionTypes.INCREMENT
});

export const incValue = (value) => ({
    type: actionTypes.INC_VALUE,
    payload: {
        value: value
    }
});

export const decValue = (value) => ({
    type: actionTypes.DEC_VALUE,
    payload: {
        value: value
    }
});

export const saveResults = () => ({
    type: actionTypes.SAVE
});

export const deleteResults = (id) => ({
    type: actionTypes.DELETE,
    payload: {
        id: id
    }
});