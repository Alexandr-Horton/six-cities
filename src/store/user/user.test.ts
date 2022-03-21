import { AuthorizationStatus } from '../../const';
import { makeFakeUserData } from '../../utils/mocks';
import { changeUserData, requireAuthorizationRequest, requireAuthorizationSuccess, requireLogoutRequest } from '../action';
import { user } from './user';

const state = {
  userData: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  authorizationStatusLoading: false,
};

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({...state});
  });

  it('should update the user data by logging in', () => {
    expect(user(state, changeUserData(makeFakeUserData)))
      .toEqual({...state, userData: makeFakeUserData});
  });

  it('should update the status by checking the users authorization', () => {
    expect(user(state, requireAuthorizationRequest()))
      .toEqual({...state, authorizationStatusLoading: true});
  });

  it('should update authorizationStatus to "AUTH"', () => {
    expect(user(state, requireAuthorizationSuccess(AuthorizationStatus.Auth)))
      .toEqual({...state, authorizationStatusLoading: false, authorizationStatus: AuthorizationStatus.Auth });
  });

  it('should update authorizationStatus to "NoAuth"', () => {
    expect(user(state, requireAuthorizationSuccess(AuthorizationStatus.NoAuth)))
      .toEqual({...state, authorizationStatusLoading: false, authorizationStatus: AuthorizationStatus.NoAuth });
  });

  it('should update the status by making an exit request', () => {
    expect(user(state, requireLogoutRequest()))
      .toEqual({...state, authorizationStatusLoading: true});
  });
});
