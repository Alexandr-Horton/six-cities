import dayjs from 'dayjs';
import { createSelector } from 'reselect';
import { UsersComments } from '../../types/comment';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getSortedUpDays = (arr: UsersComments): UsersComments => arr.slice().sort((a, b) => (dayjs(b.date).isAfter(dayjs(a.date)) ? 1 : -1));

export const getCommentsLoading = (state: State): boolean => state[NameSpace.Comments].commentsLoading;
export const getCommentsError = (state: State): boolean => state[NameSpace.Comments].commentsError;
export const getSendCommentsLoading = (state: State): boolean => state[NameSpace.Comments].sendCommentsLoading;
const getComments = (state: State): UsersComments => state[NameSpace.Comments].comments;

export const getSortedComments = createSelector(
  [getComments],
  (comments: UsersComments) => getSortedUpDays(comments),
);
