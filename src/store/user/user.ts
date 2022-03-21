import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { UserState } from '../../types/state';
import { changeUserData, requireAuthorizationRequest, requireAuthorizationSuccess, requireLogoutRequest, requireLogoutSuccess } from '../action';

const initialState: UserState = {
  userData: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  authorizationStatusLoading: false,
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(changeUserData, (state, action) => {
      const {userData} = action.payload;
      state.userData = userData;
    })
    .addCase(requireAuthorizationRequest, (state) => {
      state.authorizationStatusLoading = true;
    })
    .addCase(requireAuthorizationSuccess, (state, action) => {
      const {authStatus} = action.payload;
      state.authorizationStatusLoading = false;
      state.authorizationStatus = authStatus;
    })
    .addCase(requireLogoutRequest, (state) => {
      state.authorizationStatusLoading = true;
    })
    .addCase(requireLogoutSuccess, (state, action) => {
      const {authStatus} = action.payload;
      state.authorizationStatusLoading = false;
      state.authorizationStatus = authStatus;
      state.userData = null;
    });
});

export {user};
