import { createSelector } from 'reselect';
import { SortType } from '../../const';
import { Offer, Offers } from '../../types/offer';
import { State } from '../../types/state';
import { getCurrentCity, getCurrentSortType } from '../app/selectors';
import { NameSpace } from '../root-reducer';

const sortMap: {[key: string]: (cardA: Offer, cardB: Offer) => number} = {
  [SortType.PriceDown]: (cardA, cardB) => cardB.price - cardA.price,
  [SortType.PriceUp]: (cardA, cardB) => cardA.price - cardB.price,
  [SortType.RatingDown]: (cardA, cardB) => cardB.rating - cardA.rating,
};

const getCardList = (state: State): Offers => state[NameSpace.Offers].cardList;
export const getOffersLoading = (state: State): boolean => state[NameSpace.Offers].offersLoading;
export const getOffersError = (state: State): boolean => state[NameSpace.Offers].offersError;
export const getOfferLoading = (state: State): boolean => state[NameSpace.Offers].offerLoading;
export const getOfferError = (state: State): boolean => state[NameSpace.Offers].offerError;
export const getOffer = (state: State): Offer | null => state[NameSpace.Offers].offer;
export const getOffersNearbyLoading = (state: State): boolean => state[NameSpace.Offers].offersNearbyLoading;
export const getOffersNearby = (state: State): Offers => state[NameSpace.Offers].offersNearby;
export const getFavoritesOffersLoading = (state: State): boolean => state[NameSpace.Offers].favoritesOffersLoading;
export const getFavoritesOffersError = (state: State): boolean => state[NameSpace.Offers].favoritesOffersError;
export const getFavoritesOffers = (state: State): Offers => state[NameSpace.Offers].favoritesOffers;
export const getChangeFavoriteStatusLoading = (state: State): boolean => state[NameSpace.Offers].changeFavoriteStatusLoading;

export const getSortedAndFilteredOffers = createSelector(
  [getCardList, getCurrentCity, getCurrentSortType],
  (offers: Offers, city: string, sortType: string) => offers
    .filter((offer) => offer.city.name === city)
    .slice().sort(sortMap[sortType]),
);
