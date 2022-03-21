import { AuthorizationStatus } from '../const';
import { RootState } from '../store/root-reducer';
import { UsersComments } from './comment';
import { Offer, Offers } from './offer';
import { User } from './user';

export type AppState = {
  currentCity: string;
  currentSortType: string;
}

export type CommentsState = {
  commentsLoading: boolean;
  commentsError: boolean;
  comments: UsersComments;
  sendCommentsLoading: boolean,
}

export type OffersState = {
  cardList: Offers;
  offersLoading: boolean;
  offersError: boolean;
  offerLoading: boolean;
  offerError: boolean;
  offer: null | Offer;
  offersNearbyLoading: boolean;
  offersNearbyError: boolean;
  offersNearby: Offers;
  favoritesOffersLoading: boolean;
  favoritesOffersError: boolean
  favoritesOffers: Offers;
  changeFavoriteStatusLoading: boolean;
}

export type UserState = {
  userData: null | User;
  authorizationStatus: AuthorizationStatus;
  authorizationStatusLoading: boolean;
}

export type State = RootState
