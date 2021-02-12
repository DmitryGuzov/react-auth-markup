import React, { Dispatch, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "redux";
import { AppState } from "app-state";
// Actions
import { signInAction, signUpAction, googleSignInAction } from "../store/actions";
// Models
import { AuthSignInModel, AuthSignUpModel } from "../models";
// Components
import { AuthFormComponent } from "../components/authFormComponent/AuthFormComponent";

export interface AuthContainerProps {
  status: string;
}

export function AuthFormContainer({ status }: AuthContainerProps): JSX.Element {
  const dispatch: React.Dispatch<
    Action<AuthSignUpModel | AuthSignInModel>
  > = useDispatch<Dispatch<Action<AuthSignUpModel | AuthSignInModel>>>();
  const dispatch2: React.Dispatch<Action<any>> = useDispatch<Dispatch<Action<any>>>();
  const handleSignIn = useCallback(
    (authModel: AuthSignInModel) =>
      dispatch(
        signInAction({ email: authModel.email, password: authModel.password })
      ),
    [dispatch]
  );
  const handleSignUp = useCallback(
    (authModel: AuthSignUpModel) =>
      dispatch(
        signUpAction({
          email: authModel.email,
          password: authModel.password,
          username: authModel.username,
        })
      ),
    [dispatch]
  );
  const handleGoogleSignIn = useCallback(
    (googleData: any) =>
    dispatch2(
      googleSignInAction(googleData)
    ),
  [dispatch2]
  )
  const loading = useSelector<AppState, boolean>((state) => {
    return state.auth.status === "running";
  });
  const isSignin = useSelector((state: AppState) => {
    return state.auth.status;
  });
  return (
    <>
      <AuthFormComponent
        value={{
          email: "",
          password: "",
        }}
        loading={loading}
        authSignIn={handleSignIn}
        authSignUp={handleSignUp}
        googleAuth={handleGoogleSignIn}
        status={status}
        isSignin={isSignin}
      />
    </>
  );
}
