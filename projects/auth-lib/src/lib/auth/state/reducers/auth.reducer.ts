import { createReducer, on } from '@ngrx/store';
import { AuthDocuments } from '../actions/auth.actions';

export interface AuthState {
  userName?: string;
}

export const initialState: AuthState = {

};

export const reducer = createReducer(
  initialState,
  on(AuthDocuments.user, (s, a):AuthState => ({ ...s, userName: a.payload }))
);
