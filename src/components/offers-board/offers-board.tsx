import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentCity } from '../../store/app/selectors';
import { Offers } from '../../types/offer';
import CardList from '../card-list/card-list';
import Map from '../map/map';
import Sorting from '../sorting/sorting';

type OffersBoardProps = {
  cards: Offers
}

function OffersBoard({cards}: OffersBoardProps): JSX.Element {
  const currentCity = useSelector(getCurrentCity);

  const [activeCard, setActivCard] = useState<number | null>(null);

  const handleActiveCard = useCallback((id: number | null) => {
    setActivCard(id);
  }, []);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{cards.length} places to stay in {currentCity}</b>
          <Sorting/>
          <CardList
            cards={cards}
            onActiveCard={handleActiveCard}
          />
        </section>
        <div className="cities__right-section">
          <Map
            cards={cards}
            activeCard={activeCard}
            className="cities__map"
          />
        </div>
      </div>
    </div>
  );
}

export default OffersBoard;
