import {takeLatest, put, call} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import {START_ELECTION_FAIL, START_ELECTION_REQUEST, START_ELECTION_SUCCESS} from "../actions";

function* handleStartElection(action) {

    try {
    const {data} = yield call(api.startElection, action.payload.passport);
    if (data.status === 'ok') {
      yield put({
        type: START_ELECTION_SUCCESS,
        payload: {data}
      })
    } else {
      yield put({
        type: START_ELECTION_FAIL,
        message: data.message
      })
    }
  } catch (e) {
    console.warn(e);
    yield put({
      type: START_ELECTION_FAIL,
      message: e.message
    })
  }
}

export default function* watcher() {
    yield takeLatest(START_ELECTION_REQUEST, handleStartElection)
}
