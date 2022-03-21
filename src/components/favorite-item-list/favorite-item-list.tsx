import { Offers } from '../../types/offer';
import FavoriteItem from '../favorite-item/favorite-item';

type FavoriteItemListProps = {
  cities: string[],
  cards: Offers,
}

function FavoriteItemList({cities, cards}: FavoriteItemListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      {cities.map((city) => <FavoriteItem city={city} cards={cards} key={city}/>)}
    </ul>
  );
}

export default FavoriteItemList;
