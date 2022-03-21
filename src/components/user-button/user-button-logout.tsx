import { useDispatch } from 'react-redux';
import { fetchCardsAction, logoutAction } from '../../store/api-actions';

function UserButtonLogout(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <li
      className="header__nav-item"
      onClick={() => {
        dispatch(logoutAction());
        dispatch(fetchCardsAction());
      }}
    >
      <a className="header__nav-link" href="/#">
        <span className="header__signout">Sign out</span>
      </a>
    </li>
  );
}

export default UserButtonLogout;
