import { combineReducers } from 'redux';
import { app } from './app/app';
import { comments } from './comments/comments';
import { offers } from './offers/offers';
import { user } from './user/user';

export enum NameSpace {
  App = 'APP',
  Comments = 'COMMENTS',
  Offers = 'OFFERS',
  User = 'USER'
}

export const rootReducer = combineReducers({
  [NameSpace.App]: app,
  [NameSpace.Comments]: comments,
  [NameSpace.Offers]: offers,
  [NameSpace.User]: user,
});

export type RootState = ReturnType<typeof rootReducer>
