import { Reducer, Action } from './ngrx';

export class Store<T> {

  constructor(  private reducer: Reducer<T>,
                private state: T) {}

  getState(): T {
    return this.state;
  }

  dispatch(action: Action): void {
    this.state = this.reducer(this.state, action);
  }

}
