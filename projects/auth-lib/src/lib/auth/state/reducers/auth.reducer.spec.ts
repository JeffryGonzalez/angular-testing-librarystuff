
import { AuthDocuments } from "../actions/auth.actions";
import { initialState, reducer, AuthState } from "./auth.reducer";

describe('auth reducer', () => {

  it('has the right initial state', () => {
     const dogSpit = initialState;
     expect(dogSpit).toEqual({})
  });
  it('updates with a new user', () => {

    const state: AuthState = {};
    const action = AuthDocuments.user({ payload: 'Jeff'});

    const result = reducer(state, action);

    expect(result).toEqual({
      userName: 'Jeff'
    })
  })
})
