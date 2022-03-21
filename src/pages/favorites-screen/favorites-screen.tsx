import cn from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoritesBoard from '../../components/favorites-board/favorites-board';
import FavoritesEmpty from '../../components/favorites-empty/favoristes-empty';
import Loader from '../../pages/loading-screen/loading-screen';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { fetchFavoritesOffersAction } from '../../store/api-actions';
import FallbackError from '../fallback-error/fallback-error';
import { getFavoritesOffers, getFavoritesOffersError, getFavoritesOffersLoading } from '../../store/offers/selectors';

function Favorites(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesOffersAction());
  }, [dispatch]);

  const favoritesOffers = useSelector(getFavoritesOffers);
  const favoritesOffersLoading = useSelector(getFavoritesOffersLoading);
  const favoritesOffersError = useSelector(getFavoritesOffersError);

  if (favoritesOffersLoading) {
    return <Loader/>;
  }

  if (favoritesOffersError) {
    return <FallbackError/>;
  }

  const citiesList = Array.from(new Set(favoritesOffers.map(({city}) => city.name)));

  const pageClass = cn('page', {
    'page--favorites-empty' : !favoritesOffers.length,
  });
  const mainClass = cn('page__main', 'page__main--favorites', {
    'page__main--favorites-empty' : !favoritesOffers.length,
  });

  return (
    <div className={pageClass}>
      <Header/>
      <main className={mainClass}>
        <div className="page__favorites-container container">
          {favoritesOffers.length ?
            <FavoritesBoard cities={citiesList} favoritesList={favoritesOffers}/>
            :
            <FavoritesEmpty/> }
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Favorites;
