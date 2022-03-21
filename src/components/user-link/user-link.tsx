import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import styles from './user-link.module.css';

type UserLinkProps = {
  userEmail: string | undefined;
  userAvatar: string | undefined
}

function UserLink({userEmail, userAvatar}: UserLinkProps): JSX.Element {
  return (
    <li className="header__nav-item user">
      <Link
        className="header__nav-link header__nav-link--profile"
        to={AppRoute.Favorites}
      >
        <div className="header__avatar-wrapper user__avatar-wrapper">
          {userAvatar ? <img className={styles.avatar} src={userAvatar} alt="avatar" /> : ''}
        </div>
        <span className="header__user-name user__name">{userEmail}</span>
      </Link>
    </li>
  );
}

export default UserLink;
