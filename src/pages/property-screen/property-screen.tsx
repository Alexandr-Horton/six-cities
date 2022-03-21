import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Loader from '../../pages/loading-screen/loading-screen';
import CardList from '../../components/card-list/card-list';
import Comments from '../../components/comments/comments';
import Header from '../../components/header/header';
import HostList from '../../components/host-list/host-list';
import ImageList from '../../components/image-list/image-list';
import Map from '../../components/map/map';
import OptionList from '../../components/option-list/option-list';
import { changeFavorite, fetchCommentsAction, fetchOfferAction, fetchOffersNearby } from '../../store/api-actions';
import NotFound from '../not-found/not-found-screen';
import { getOffer, getOfferError, getOfferLoading, getOffersNearby, getOffersNearbyLoading } from '../../store/offers/selectors';
import { getCommentsLoading } from '../../store/comments/selectors';
import { resetOfferError } from '../../store/action';
import { getRating } from '../../utils/utils';

const MAX_COUNT_NEARBY = 3;

function Property(): JSX.Element {
  const { id } = useParams<{ id: string}>();
  const dispatch = useDispatch();

  const onPageUnload = useCallback(() => {
    dispatch(resetOfferError());
  }, [dispatch]);

  const offer = useSelector(getOffer);
  const offerLoading = useSelector(getOfferLoading);
  const offerError = useSelector(getOfferError);
  const offersNearby = useSelector(getOffersNearby);
  const offersNearbyLoading = useSelector(getOffersNearbyLoading);
  const commentsLoading = useSelector(getCommentsLoading);

  useEffect(() => {
    dispatch(fetchOfferAction(id));
    dispatch(fetchOffersNearby(id));
    dispatch(fetchCommentsAction(id));

    return () => onPageUnload();
  }, [dispatch, id, onPageUnload]);

  if (offerLoading || offersNearbyLoading || commentsLoading) {
    return <Loader/>;
  }

  if (offerError || !offer) {
    return <NotFound/>;
  }

  const nearbyList = offersNearby.slice(0, MAX_COUNT_NEARBY);
  const offersPinsForMap = [...nearbyList, offer];

  const spanText = offer.isFavorite ? 'In bookmarks' : 'To bookmarks';
  const offerRating = getRating(offer.rating);

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--property">
        <section className="property">
          <ImageList images={offer.images} type={offer.type}/>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button
                  className={`property__bookmark-button  button ${offer.isFavorite && 'property__bookmark-button--active'}`} type="button"
                  onClick={() => dispatch(changeFavorite(offer.id, !offer.isFavorite))}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{spanText}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: offerRating}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">${offer.rating}</span>
              </div>
              <ul className="property__features">
                <li
                  className="property__feature property__feature--entire"
                  style={{textTransform: 'capitalize'}}
                >
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${offer.bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${offer.maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <OptionList options={offer.goods}/>
              <HostList host={offer.host} description={offer.description}/>
              <Comments/>
            </div>
          </div>
          <Map
            cards={offersPinsForMap}
            activeCard={offer.id}
            className="property__map"
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <CardList
              cards={nearbyList}
              listType="near"
              cardType="near"
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Property;
