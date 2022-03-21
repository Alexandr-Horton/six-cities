import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { createApi } from './services/api';
import { ThunkAppDispatch } from './types/action';
import { checkAuthAction, fetchCardsAction } from './store/api-actions';
import { requireAuthorizationSuccess } from './store/action';
import { AuthorizationStatus } from './const';
import { redirect } from './store/middlewares/redirect';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { rootReducer } from './store/root-reducer';
import { configureStore } from '@reduxjs/toolkit';

const api = createApi(
  () => store.dispatch(requireAuthorizationSuccess(AuthorizationStatus.NoAuth)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchCardsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
