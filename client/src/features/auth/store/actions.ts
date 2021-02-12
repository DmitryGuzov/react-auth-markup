import { defineAction } from 'rd-redux-utils';
import { AuthSignInModel, AuthSignUpModel } from '../models';

export const signInAction = defineAction<AuthSignInModel>('SIGNIN');
export const signUpAction = defineAction<AuthSignUpModel>('SIGNUP');
export const googleSignInAction = defineAction<any>('GOOGLE_SIGNUP');
