import cn from 'classnames';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeFavorite } from '../../store/api-actions';
import { getChangeFavoriteStatusLoading } from '../../store/offers/selectors';
import { Offer } from '../../types/offer';
import { getRating } from '../../utils/utils';

type CardProps = {
  card: Offer;
  cardType?: string;
  onActiveCard?: (id: number | null) => void;
}

function Card({card, cardType ='cities', onActiveCard}: CardProps): JSX.Element {
  const {isPremium, isFavorite, previewImage, price, type, rating, title, id} = card;
  const dispatch = useDispatch();
  const favoriteStatusLoading = useSelector(getChangeFavoriteStatusLoading);

  const offerRating = getRating(rating);
  const favoriteType = cardType === 'favorites';

  const articleClasses = cn('place-card', {
    'cities__place-card': cardType === 'cities',
    'favorites__card': cardType === 'favorites',
    'near-places__card': cardType === 'near',
  });

  const imageWrapperClasses = cn('place-card__image-wrapper', {
    'cities__image-wrapper': cardType === 'cities',
    'favorites__image-wrapper': cardType === 'favorites',
    'near-places__image-wrapper': cardType === 'near',
  });

  const cardInfoClasses = cn('place-card__info', {
    'favorites__card-info': favoriteType,
  });

  const buttonClasses = cn('place-card__bookmark-button button', {
    'place-card__bookmark-button--active' : isFavorite,
  });

  const spanText = card.isFavorite ? 'In bookmarks' : 'To bookmarks';
  const isDisabled = favoriteStatusLoading;

  return (
    <article className={articleClasses}
      onMouseEnter={() => onActiveCard ? onActiveCard(id) : undefined}
      onMouseLeave={() => onActiveCard ? onActiveCard(null) : undefined}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)}
      <div className={imageWrapperClasses}>
        <Link to={`offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={`${favoriteType ? '150' : '260'}`}
            height={`${favoriteType ? '110' : '200'}`}
            alt={title}
          />
        </Link>
      </div>
      <div className={cardInfoClasses}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={buttonClasses}
            type="button"
            onClick={() => dispatch(changeFavorite(id, !isFavorite))}
            disabled={isDisabled}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{spanText}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: offerRating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p
          className="place-card__type"
          style={{textTransform: 'capitalize'}}
        >
          {type}
        </p>
      </div>
    </article>
  );
}

export default memo(Card);
