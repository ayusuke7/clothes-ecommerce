import { put, call, takeEvery } from "redux-saga/effects";
import { userActions } from "../slices/user";
import UserServices from "../../services/user";
import {
  USERS_FIELDS as uf,
  ADDRESS_FIELDS as af,
  CONTACT_FIELDS as cf,
} from "../../commons/fields";
import session from "../../utils/session";
import { removeMask } from "../../utils/helpers";
import { toast } from "react-toastify";

const service = new UserServices();

function* userLogin({ payload }) {
  try {
    const res = yield call(service.postUserLogin, payload);
    const result = res.data.result;
    session.setUser(result);
    yield put(userActions.setLoginResponse(result.user));
  } catch (error) {
    yield put(userActions.setMessage(error?.message));
  }
}

function* userRegister({ payload }) {
  try {
    const data = {
      [uf.FIRST_NAME]: payload[uf.FIRST_NAME],
      [uf.LAST_NAME]: payload[uf.LAST_NAME],
      [uf.EMAIL]: payload[uf.EMAIL],
      [uf.CPF]: removeMask(payload[uf.CPF]),
      [uf.PASSWORD]: payload[uf.PASSWORD],
      [uf.ADDRESSES]: [
        {
          [af.ADDRESS]: payload[af.ADDRESS],
          [af.NUMBER]: payload[af.NUMBER],
          [af.ZIPCODE]: removeMask(payload[af.ZIPCODE]),
          [af.DISTRICT]: payload[af.DISTRICT],
          [af.CITY]: payload[af.CITY],
          [af.STATE]: payload[af.STATE],
          [af.COMPLETE]: payload[af.COMPLETE],
          [af.COUNTRY]: "Brasil",
        },
      ],
      [uf.CONTACTS]: [
        {
          [cf.PHONE]: removeMask(payload[cf.PHONE]),
        },
      ],
    };

    const { status } = yield call(service.postUserRegister, data);

    if (status === 200) {
      yield put(userActions.setRegisterResponse());
      toast.success("Usuário cadastrado com sucesso!");
    }
  } catch (error) {
    yield put(userActions.setMessage(error?.message));
  }
}

function* userInfo({ payload }) {
  try {
    const { data } = yield call(service.getUserInfo, payload);
    yield put(userActions.setInfoResponse(data.result));
  } catch (error) {
    yield put(userActions.setMessage(error?.message));
  }
}

export default function* watcher() {
  yield takeEvery(userActions.getLoginRequest, userLogin);
  yield takeEvery(userActions.getRegisterRequest, userRegister);
  yield takeEvery(userActions.getInfoRequest, userInfo);
}
