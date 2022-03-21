import { toast } from 'react-toastify';
import { APIRoute, AppRoute, AuthorizationStatus, FailMessage, HttpCode } from '../const';
import { dropToken, saveToken} from '../services/token';
import { ThunkActionResult } from '../types/action';
import { AuthData } from '../types/auth-data';
import { BackOffer, BackOffers } from '../types/offer';
import { adaptToClient, adaptUserDataToClient, adaptUsersCommentsToClient } from '../utils/utils';
import { BackUser } from '../types/user';
import {
  changeFavoriteStatusError,
  changeFavoriteStatusRequest, changeFavoriteStatusSuccess, changeUserData, loadCardsError,
  loadCardsRequest, loadCardsSuccess, loadCommentsError, loadCommentsRequest, loadCommentsSuccess,
  loadFavoritesOffersError, loadFavoritesOffersRequest, loadFavoritesOffersSuccess, loadNearbyError,
  loadNearbyRequest, loadNearbySuccess, loadOfferError, loadOfferRequest, loadOfferSuccess,
  redirectToBack, redirectToRoute, requireAuthorizationError, requireAuthorizationRequest,
  requireAuthorizationSuccess, requireLogoutError, requireLogoutRequest, requireLogoutSuccess,
  sendCommentsError, sendCommentsRequest, sendCommentsSuccess
} from './action';
import { CommentData, UsersComments } from '../types/comment';

export const fetchCardsAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadCardsRequest());
    try {
      const {data} = await api.get<BackOffers>(APIRoute.Cards);
      dispatch(loadCardsSuccess(data.map(adaptToClient)));
    } catch {
      dispatch(loadCardsError());
    }
  }
);

export const fetchOfferAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadOfferRequest());
    try {
      const {data} = await api.get<BackOffer>(`${APIRoute.Cards}/${id}`);
      dispatch(loadOfferSuccess(adaptToClient(data)));
    } catch {
      dispatch(loadOfferError());
    }
  }
);

export const fetchOffersNearby = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadNearbyRequest());
    try {
      const {data} = await api.get<BackOffers>(`${APIRoute.Cards}/${id}${APIRoute.Nearby}`);
      dispatch(loadNearbySuccess(data.map(adaptToClient)));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch(e: any) {
      if (e.response.status !== HttpCode.NotFound) {
        toast.error(FailMessage.Nearby);
      }
      dispatch(loadNearbyError());
    }
  }
);

export const fetchCommentsAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadCommentsRequest());
    try {
      const {data} = await api.get<UsersComments>(`${APIRoute.Comments}/${id}`);
      dispatch(loadCommentsSuccess(data.map(adaptUsersCommentsToClient)));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch(e: any) {
      if (e.response.status !== HttpCode.BadRequest) {
        toast.error(FailMessage.LoadComments);
      }
      dispatch(loadCommentsError());
    }
  }
);

export const fetchFavoritesOffersAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadFavoritesOffersRequest());
    try {
      const {data} = await api.get<BackOffers>(APIRoute.Favorites);
      dispatch(loadFavoritesOffersSuccess(data.map(adaptToClient)));
    } catch {
      dispatch(loadFavoritesOffersError());
    }
  }
);

export const changeFavorite = (id: number, status: boolean): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(changeFavoriteStatusRequest());
    try {
      const {data} = await api.post(`${APIRoute.Favorites}/${id}/${Number(status)}`);
      dispatch(changeFavoriteStatusSuccess(adaptToClient(data)));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch(e: any) {
      if (e.response.status === HttpCode.Unauthorized) {
        dispatch(redirectToRoute(AppRoute.Login));
        dispatch(changeFavoriteStatusError());
      } else {
        toast.error(FailMessage.ChangeFavorite);
      }
    }
  }
);

export const sendCommentsAction = ({id, rating, comment}: CommentData, resetForm: () => void): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(sendCommentsRequest());
    try {
      const  {data} = await api.post<UsersComments>(`${APIRoute.Comments}/${id}`, {rating, comment});
      dispatch(sendCommentsSuccess(data.map(adaptUsersCommentsToClient)));
      resetForm();
    } catch {
      toast.error(FailMessage.SendComment);
      dispatch(sendCommentsError());
    }
  }
);

export const checkAuthAction = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get<BackUser>(APIRoute.Login);
      dispatch(requireAuthorizationSuccess(AuthorizationStatus.Auth));
      dispatch(changeUserData(adaptUserDataToClient(data)));
    } catch  {
      dispatch(requireAuthorizationSuccess(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    dispatch(requireAuthorizationRequest());
    try {
      const {data} = await api.post<BackUser>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(requireAuthorizationSuccess(AuthorizationStatus.Auth));
      dispatch(changeUserData(adaptUserDataToClient(data)));
      dispatch(fetchCardsAction());
      dispatch(redirectToBack());
    } catch {
      dispatch(requireAuthorizationError(AuthorizationStatus.NoAuth));
      toast.error(FailMessage.Auth);
    }
  }
);

export const logoutAction = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    dispatch(requireLogoutRequest());
    try {
      api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireLogoutSuccess(AuthorizationStatus.NoAuth));
    } catch {
      dispatch(requireLogoutError());
      toast.error(FailMessage.Auth);
    }
  }
);
