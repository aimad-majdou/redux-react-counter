import React, { Component } from 'react';
import { connect} from 'react-redux';
import * as actionTypes from '../../redux/actionTypes'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {


    render () {
        const deleteBtnStyle =  {
            backgroundColor: "Red",
            border: "none",
            color: "white",
            width: "24px",
            height: "24px",
            fontSize: "12px",
            cursor: "pointer",
            fontWeight: "900"
        };
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onIncrementCounterWithValue}  />
                <CounterControl label="Subtract 5" clicked={this.props.onDecrementCounterWithValue}  />
                <br/>
                <button onClick={this.props.onSave.bind(this, this.props.counter)}>Save Result</button>
                <ul>
                    {this.props.results.map(result => (
                        <li key={result.id} style={{listStyle: "none", marginBottom: "10px"}}>
                            <span style={{marginRight: "10px"}}>{result.value}</span>
                            <button style={deleteBtnStyle} onClick={this.props.onDelete.bind(this, result.id)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counterReducer.counter,
        results: state.resultReducer.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onIncrementCounterWithValue: () => dispatch({type: actionTypes.INC_VALUE, payload: {
            value: 5
        }}),
        onDecrementCounterWithValue: () => dispatch({type: actionTypes.DEC_VALUE, payload: {
            value: 5
        }}),
        onSave: (result) => dispatch({type: actionTypes.SAVE, payload: {
            result: result
        }}),
        onDelete: (id) => dispatch({type: actionTypes.DELETE, payload: {
            id: id
        }})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);