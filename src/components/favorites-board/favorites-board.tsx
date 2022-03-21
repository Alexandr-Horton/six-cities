import { Offers } from '../../types/offer';
import FavoriteItemList from '../favorite-item-list/favorite-item-list';

type FavoritesBoardProps = {
  cities: string[];
  favoritesList: Offers
}

function FavoritesBoard({cities, favoritesList}: FavoritesBoardProps): JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoriteItemList cities={cities} cards={favoritesList} />
    </section>
  );
}

export default FavoritesBoard;
