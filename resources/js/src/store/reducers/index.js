import {START_ELECTION_FAIL, START_ELECTION_REQUEST, START_ELECTION_SUCCESS} from "../actions";

const initialState = {
  error: '',
  user: {},
  candidates: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case START_ELECTION_REQUEST: {
      return {...state, error: ''}
    }
    case START_ELECTION_FAIL: {
      return {...state, error: action.message}
    }
    case START_ELECTION_SUCCESS: {
      const {user, candidates} = action.payload.data;
      return {...state, user, candidates}
    }
    default: {
      return state;
    }
  }
}
