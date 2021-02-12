/*-------------VENDORS-------------------*/
import axios, { AxiosResponse } from "axios";
import { defineAction } from "rd-redux-utils";
import { push } from "react-router-redux";
import { put, takeEvery } from "redux-saga/effects";
import { API_SERVERS } from "../../../../config";
import jwtDecode from "jwt-decode";
/*-------------HELPERS-------------------*/
// import { MAIN_ASSET_URL } from "../../../home";
import { HOME_PAGE_URL, SIGNIN_PAGE_URL } from "../../urls";
/*-------------MODELS-------------------*/
import {
  AuthSignInModel,
  AuthSignUpModel,
  CurrentUserModel,
} from "../../models";
/*-------------ACTIONS-------------------*/
import { signInAction, signUpAction, googleSignInAction } from "../actions";
/*-------------REDUCERS-------------------*/
import { AuthAppState, GoogleAuthAppState } from "../reducer";

export const authAtServerStartedAction = defineAction<AuthAppState>(
  "AUTH_AT_SERVER_STARTED"
);
export const authAtServerCompletedAction = defineAction<AuthAppState>(
  "AUTH_AT_SERVER_SUCCESS"
);
export const googleAuthAtServerStartedAction = defineAction<GoogleAuthAppState>(
  "GOOGLE_AUTH_AT_SERVER_STARTED"
);
export const googleAuthAtServerCompletedAction = defineAction<GoogleAuthAppState>(
  "GOOGLE_AUTH_AT_SERVER_SUCCESS"
);

export function* handleSignInSaga() {
  yield takeEvery(
    signInAction.TYPE,
    function* (action: typeof signInAction.typeOf.action) {
      let authModel: AuthSignInModel = action;
      try {
        yield put(
          authAtServerStartedAction({
            status: "running",
          })
        );
        const response: AxiosResponse = yield axios.post(
          `${API_SERVERS}/api/auth/signin`,
          authModel
        );

        if (response.status === 201) {
          if (response.data.status === true) {
            localStorage.setItem("jwt", JSON.stringify(response.data.tokens));
            let user: CurrentUserModel = jwtDecode(
              response.data.tokens.access_token
            );
            localStorage.setItem(
              "status",
              JSON.stringify(response.data.status)
            );
            localStorage.setItem("user", JSON.stringify(user));
            yield put(
              authAtServerCompletedAction({
                status: "success",
              })
            );
            yield put(push(HOME_PAGE_URL.urlTemplate));
          }
          if (response.data.status === false) {
            throw new Error("Incorrect fields");
          }
        }
      } catch (e) {
        yield put(
          authAtServerCompletedAction({
            status: "error",
            error: e.toString(),
          })
        );
      }
    }
  );
}
export function* handleSignUpSaga() {
  yield takeEvery(
    signUpAction.TYPE,
    function* (action: typeof signUpAction.typeOf.action) {
      let authModel: AuthSignUpModel = action;

      try {
        yield put(
          authAtServerStartedAction({
            status: "running",
          })
        );
        const response: AxiosResponse = yield axios.post(
          `${API_SERVERS}/api/auth/signup`,
          authModel
        );

        if (response.status === 201) {
          if (response.data.status === true) {
            yield put(
              authAtServerCompletedAction({
                status: "success",
              })
            );
            yield put(push(SIGNIN_PAGE_URL.urlTemplate));
          } else if (response.data.status === false) {
            throw new Error("Error");
          }
        }
      } catch (e) {
        yield put(
          authAtServerCompletedAction({
            status: "error",
            error: e.toString(),
          })
        );
      }
    }
  );
}
export function* handleGoogleSignInSaga() {
  yield takeEvery(
    googleSignInAction.TYPE,
    function* (action: typeof signUpAction.typeOf.action) {
      let googleAuthModel: any = action;
      try {
        yield put(
          googleAuthAtServerStartedAction({
            status: "running",
          })
        );
        let token = googleAuthModel.tokenId;
        const response: AxiosResponse = yield axios.post(
          `${API_SERVERS}/api/auth/google`,
          { token }
        );
        console.log(response.data);
        if (response.status === 201) {
          if (response.data.status === true) {
            localStorage.setItem("jwt", JSON.stringify(response.data.tokens));
            localStorage.setItem(
              "status",
              JSON.stringify(response.data.status)
            );
            let user: CurrentUserModel = jwtDecode(
              response.data.tokens.access_token
            );
            localStorage.setItem("user", JSON.stringify(user));
            yield put(
              authAtServerCompletedAction({
                status: "success",
              })
            );
            yield put(push(HOME_PAGE_URL.urlTemplate));
          }
          if (response.data.status === false) {
            throw new Error("Incorrect fields");
          }
        }
      } catch (e) {
        yield put(
          googleAuthAtServerCompletedAction({
            status: "error",
            error: e.toString(),
          })
        );
      }
    }
  );
}
