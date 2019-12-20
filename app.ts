import { Store } from './ngrx-fake/store';
import { counterReducer } from './counter/counter.reducers';
import { incrementAction, divideAction } from './counter/counter.actions';

console.time('[counter-reducer]')

const store = new Store(counterReducer, 10)

console.log(store.getState())

store.dispatch(incrementAction)

store.dispatch(divideAction)

console.log(store.getState())

console.timeEnd('[counter-reducer]')

