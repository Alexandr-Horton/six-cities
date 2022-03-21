import cn from 'classnames';
import { Host } from '../../types/offer';

type HostListProps = {
  host: Host;
}

function HostInfo({host}: HostListProps): JSX.Element {
  const {avatarUrl, name, isPro} = host;

  const avatarClasses = cn('property__avatar-wrapper user__avatar-wrapper' , {
    'property__avatar-wrapper--pro' : isPro,
  });

  return (
    <div className="property__host-user user">
      <div className={avatarClasses}>
        <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
      </div>
      <span className="property__user-name">
        {name}
      </span>
      {isPro && (
        <span className="property__user-status">
              Pro
        </span>
      )}
    </div>
  );
}

export default HostInfo;
