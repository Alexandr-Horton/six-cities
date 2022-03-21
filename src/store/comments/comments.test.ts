import { makeFakeComments } from '../../utils/mocks';
import { loadCommentsRequest, loadCommentsSuccess, loadCommentsError, sendCommentsRequest, sendCommentsSuccess, sendCommentsError } from '../action';
import {comments} from './comments';

const state = {
  commentsLoading: false,
  commentsError: false,
  comments: [],
  sendCommentsLoading: false,
};

describe('Reducer: comments', () => {
  it('without additional parameters should return initial state', () => {
    expect(comments(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({...state});
  });

  it('should update the status of loading by start loading comments', () => {
    expect(comments(state, loadCommentsRequest()))
      .toEqual({...state, commentsLoading: true});
  });

  it('should update comments and status of loading', () => {
    expect(comments(state, loadCommentsSuccess([makeFakeComments])))
      .toEqual({...state, commentsLoading: false, comments: [makeFakeComments]});
  });

  it('should update status of error and loading', () => {
    expect(comments(state, loadCommentsError()))
      .toEqual({...state, commentsLoading: false, commentsError: true});
  });

  it('should update the status of the submission by starting sending a comment', () => {
    expect(comments(state, sendCommentsRequest()))
      .toEqual({...state, sendCommentsLoading: true});
  });

  it('should update the comments and status of the submission after sending the comment', () => {
    expect(comments(state, sendCommentsSuccess([makeFakeComments])))
      .toEqual({...state, sendCommentsLoading: false, comments: [makeFakeComments]});
  });

  it('should update error and status of the submission by uploading comments', () => {
    expect(comments(state, sendCommentsError()))
      .toEqual({...state, sendCommentsLoading: false});
  });
});
