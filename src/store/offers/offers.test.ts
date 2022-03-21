import { makeFakeOffer } from '../../utils/mocks';
import {
  changeFavoriteStatusError, changeFavoriteStatusRequest,
  loadCardsError, loadCardsRequest, loadCardsSuccess, loadFavoritesOffersError, loadFavoritesOffersRequest,
  loadFavoritesOffersSuccess, loadNearbyError, loadNearbyRequest, loadNearbySuccess, loadOfferError,
  loadOfferRequest, loadOfferSuccess, resetOfferError
} from '../action';
import { offers } from './offers';

const state = {
  cardList: [],
  offersLoading: false,
  offersError: false,
  offerLoading: false,
  offerError: false,
  offer: null,
  offersNearbyLoading: false,
  offersNearbyError: false,
  offersNearby: [],
  favoritesOffersLoading: false,
  favoritesOffersError: false,
  favoritesOffers: [],
  changeFavoriteStatusLoading: false,
};

describe('Reducer: offers', () => {
  it('without additional parameters should return initial state', () => {
    expect(offers(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({...state});
  });

  it('should update the status by load offers', () => {
    expect(offers(state, loadCardsRequest()))
      .toEqual({...state, offersLoading: true});
  });

  it('should update the status and offers by uploading offers', () => {
    expect(offers(state, loadCardsSuccess([makeFakeOffer])))
      .toEqual({...state, offersLoading: false, cardList: [makeFakeOffer]});
  });

  it('should update the error status by uploading offers', () => {
    expect(offers(state, loadCardsError()))
      .toEqual({...state, offersError: true});
  });

  it('should update the download status by load the offer', () => {
    expect(offers(state, loadOfferRequest()))
      .toEqual({...state, offerLoading: true});
  });

  it('should update the download status and offer by downloading the offer', () => {
    expect(offers(state, loadOfferSuccess(makeFakeOffer)))
      .toEqual({...state, offerLoading: false, offer: makeFakeOffer});
  });

  it('should update the error status by downloading the offer', () => {
    expect(offers(state, loadOfferError()))
      .toEqual({...state, offerError: true});
  });

  it('should update the download status by load nearby offers', () => {
    expect(offers(state, loadNearbyRequest()))
      .toEqual({...state, offersNearbyLoading: true});
  });

  it('should update the download status and nearby offers by uploading nearby offers', () => {
    expect(offers(state, loadNearbySuccess([makeFakeOffer])))
      .toEqual({...state, offersLoading: false, offersNearby: [makeFakeOffer]});
  });

  it('should update the error status by uploading nearby offers', () => {
    expect(offers(state, loadNearbyError()))
      .toEqual({...state, offersNearbyError: true});
  });

  it('should update the download status by load your favorite offers', () => {
    expect(offers(state, loadFavoritesOffersRequest()))
      .toEqual({...state, favoritesOffersLoading: true});
  });

  it('should update the download status and favorite offers by uploading your favorite offers', () => {
    expect(offers(state, loadFavoritesOffersSuccess([makeFakeOffer])))
      .toEqual({...state, favoritesOffersLoading: false, favoritesOffers:[makeFakeOffer]});
  });

  it('should update the error status by uploading your favorite offers', () => {
    expect(offers(state, loadFavoritesOffersError()))
      .toEqual({...state, favoritesOffersLoading: false, favoritesOffersError: true});
  });

  it('should update the status of a favorite by executing the request', () => {
    expect(offers(state, changeFavoriteStatusRequest()))
      .toEqual({...state, changeFavoriteStatusLoading: true});
  });

  it('should update the error status by executing the request', () => {
    expect(offers(state, changeFavoriteStatusError()))
      .toEqual({...state, changeFavoriteStatusLoading: false});
  });

  it('should reset data offers', () => {
    expect(offers(state, resetOfferError()))
      .toEqual({
        ...state,
        offer: null,
        offersNearby:[],
        offerError: false,
        offersNearbyError: false});
  });
});
