import { all } from 'redux-saga/effects';
import { handleSignInSaga, handleSignUpSaga,handleGoogleSignInSaga } from './handleAuth';

export function* authSaga() {
  yield all([handleSignInSaga(), handleSignUpSaga(),handleGoogleSignInSaga()]);
}
