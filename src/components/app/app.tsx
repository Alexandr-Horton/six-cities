import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import { AppRoute } from '../../const';
import Favorites from '../../pages/favorites-screen/favorites-screen';
import Login from '../../pages/login-screen/login-screen';
import Main from '../../pages/main-screen/main-screen';
import NotFound from '../../pages/not-found/not-found-screen';
import Property from '../../pages/property-screen/property-screen';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main/>
        </Route>
        <Route exact path={AppRoute.Login}>
          <Login/>
        </Route>
        <PrivateRoute exact
          path={AppRoute.Favorites}
          render={() => <Favorites/>}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <Property />
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
