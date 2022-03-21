import cn from 'classnames';
import Card from '../card/card';
import { Offers } from '../../types/offer';

type CardListProps = {
  cards: Offers
  onActiveCard?: (id: number | null) => void;
  listType?: string;
  cardType?: string
}

function CardList({cards, cardType, listType = 'default', onActiveCard = undefined}: CardListProps): JSX.Element {
  const listClasses = cn('places__list', {
    'cities__places-list tabs__content'  : listType === 'default',
    'near-places__list' : listType ==='near',
  });

  return (
    <div className={listClasses}>
      {cards.map((card) => (
        <Card
          card={card}
          key={card.id}
          cardType={cardType}
          onActiveCard={onActiveCard}
        />))}
    </div>
  );
}

export default CardList;


