import { useSelector } from 'react-redux';
import {Route, Redirect, RouteProps} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user/selectors';
import Loader from '../../pages/loading-screen/loading-screen';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
}

function PrivateRoute({exact, path, render}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Loader/>;
  }

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render()
          : <Redirect to={AppRoute.Login} />
      )}
    />
  );
}

export default PrivateRoute;
