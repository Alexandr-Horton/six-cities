import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from './state';

export enum ActionType {
  ChangeCity = 'app/changeCity',
  ChangeSortType ='app/changeSortType',
  ChangeUserData = 'user/changeUserData',
  LoadCardsError = 'data/loadCardsError',
  LoadCardsSuccess = 'data/loadCardsSuccess',
  LoadCardsRequest = 'data/loadCardsRequest',
  LoadOfferRequest = 'data/loadOffersRequest',
  LoadOfferSuccess = 'data/loadOfferSuccess',
  LoadOfferError = 'data/loadOfferError',
  LoadNearbyRequest = 'data/loadNearbyRequest',
  LoadNearbySuccess = 'data/LoadNearbySuccess',
  LoadNearbyError = 'data/loadNearbyError',
  LoadCommentsRequest = 'data/loadCommentsRequest',
  LoadCommentsSuccess = 'data/loadCommentsSuccess',
  LoadCommentsError = 'data/loadCommentsError',
  LoadFavoritesOffersRequest = 'data/loadFavoritesOffersRequest',
  LoadFavoritesOffersSuccess = 'data/loadFavoritesOffersSuccess',
  LoadFavoritesOffersError = 'data/LoadFavoritesOffersError',
  SendCommentsRequest = 'data/sendCommentsRequest',
  SendCommentsSuccess = 'data/sendCommentsSuccess',
  SendCommentsError = 'data/sendCommentsError',
  RequireAuthorizationRequest = 'user/requireAuthorizationRequest',
  RequireAuthorizationSuccess = 'user/requireAuthorizationSuccess',
  RequireAuthorizationError = 'data/requireAuthorizationError',
  RequireLogoutRequest = 'user/requireLogoutRequest',
  RequireLogoutSuccess = 'user/requireLogoutSuccess',
  RequireLogoutError = 'user/requireLogoutError',
  RedirectToRoute = 'data/redirectToRoute',
  RedirectToBack = 'data/redirectToBack',
  ChangeFavoriteStatusRequest = 'data/changeFavoriteStatusRequest',
  ChangeFavoriteStatusSuccess = 'data/changeFavoriteStatusSuccess',
  ChangeFavoriteStatusError = 'data/changeFavoriteStatusError',
  ResetOfferError = 'data/resetOfferError'
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;

