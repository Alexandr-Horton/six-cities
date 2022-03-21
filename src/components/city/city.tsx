import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { changeCity } from '../../store/action';
import { getCurrentCity } from '../../store/app/selectors';

type CityProps = {
  city: string;
}

function City({city}: CityProps): JSX.Element {
  const dispatch = useDispatch();
  const currentCity = useSelector(getCurrentCity);

  const linkClasses = cn('locations__item-link tabs__item', {
    'tabs__item--active': city === currentCity,
  });

  return (
    <li
      className="locations__item"
      onClick={() => dispatch(changeCity(city))}
    >
      <a className={linkClasses} href="/#">
        <span>{city}</span>
      </a>
    </li>
  );
}

export default City;
