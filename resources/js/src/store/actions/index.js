export const START_ELECTION_REQUEST = 'START_ELECTION_REQUEST';
export const START_ELECTION_SUCCESS = 'START_ELECTION_SUCCESS';
export const START_ELECTION_FAIL = 'START_ELECTION_FAIL';

export function startElection(passport) {
  return {
    type: START_ELECTION_REQUEST, payload: {passport}
  }
}
