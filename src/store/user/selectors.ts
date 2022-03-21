import { AuthorizationStatus } from '../../const';
import { State } from '../../types/state';
import { User } from '../../types/user';
import { NameSpace } from '../root-reducer';

export const getUserData = (state: State): User | null => state[NameSpace.User].userData;
export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAuthorizationStatusLoading = (state: State): boolean => state[NameSpace.User].authorizationStatusLoading;
