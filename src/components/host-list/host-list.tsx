import { Host } from '../../types/offer';
import HostDescription from '../host-description/host-description';
import HostInfo from '../host-info/host-info';

type HostListProps = {
  host: Host;
  description: string
}

function HostList({host, description}: HostListProps): JSX.Element {
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <HostInfo host={host}/>
      <HostDescription description={description} />
    </div>
  );
}

export default HostList;
