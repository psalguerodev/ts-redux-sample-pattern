import { createStore } from 'redux';
import { decrementAction, divideAction, factorAction, incrementAction } from './counter/counter.actions';
import { counterReducer } from './counter/counter.reducers';

console.time('[counter-store-redux]')

const store = createStore(counterReducer, 10);

store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementAction);

store.dispatch(divideAction);

store.dispatch(decrementAction);

store.dispatch(factorAction);

console.timeEnd('[counter-store-redux]')
