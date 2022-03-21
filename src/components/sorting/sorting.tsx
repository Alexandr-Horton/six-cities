import cn from 'classnames';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SortType } from '../../const';
import { changeSortType } from '../../store/action';
import { getCurrentSortType } from '../../store/app/selectors';

function Sorting(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const currentSortType = useSelector(getCurrentSortType);

  const sortedType = Object.values(SortType);

  const listClasses = cn('places__options places__options--custom', {
    'places__options--opened' : isOpen === true,
  });

  const handleClickItem = (sortType: string) => {
    dispatch(changeSortType(sortType));
    setIsOpen(!isOpen);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">
        Sort by
      </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={listClasses}>
        {sortedType.map((title) => (
          <li key={title}
            className={`places__option ${currentSortType === title && 'places__option--active'}`}   //нужно как-то красивее сделать
            tabIndex={0}
            onClick={() => handleClickItem(title)}
          >
            {title}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
