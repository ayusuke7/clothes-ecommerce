import { put, call, takeEvery } from "redux-saga/effects";
import { userActions } from "../slices/user";
import UserServices from "../../services/user";
import session from "../../utils/session";

const service = new UserServices();

function* userLogin({ payload }) {
  try {
    const res = yield call(service.postUserLogin, payload);
    const { token, user } = res.data.result;
    session.setToken(token);
    yield put(userActions.setLoginResponse(user));
  } catch (error) {
    yield put(userActions.setMessage(error));
  }
}

export default function* watcher() {
  yield takeEvery(userActions.getLoginRequest, userLogin);
}
