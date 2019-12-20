import { Action } from '../ngrx-fake/ngrx';

const INIT_VALUE = 10

export function counterReducer(state = INIT_VALUE, action: Action) {

  switch (action.type) {

    case 'INCREMENT':
      return state += 1;

    case 'DECREMENT':
      return state -= 1;

    case 'FACTOR':
      return state *= action.payload;

    case 'DIVIDE':
      return state /= action.payload;

    default:
      return state;

  }

}
