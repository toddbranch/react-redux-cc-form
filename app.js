import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import Form from './containers/form';
import CVCReducer from './reducers/cvc_reducer';
import CardNumberReducer from './reducers/card_number_reducer';

// store is created here!
var combined = combineReducers({
    cvc: CVCReducer,
    cardNumber: CardNumberReducer
});

var store = createStore(combined);

var App = (
    <Provider store={store}>
        <Form />
    </Provider>
);

ReactDOM.render(
    App,
    document.getElementById('root')
);
