import { UserComment } from '../../types/comment';
import { getFormatDate, getRating } from '../../utils/utils';

type CommentProps = {
  comment: UserComment;
}

function Comment({comment}: CommentProps): JSX.Element {
  const {
    rating,
    user,
    date,
    comment: userComment,
  } = comment;
  const {avatarUrl, isPro, name} = user;
  const commentRating = getRating(rating);

  const commentDate = getFormatDate(date, 'MMMM YYYY');
  const commentDateTime = getFormatDate(date, 'YYYY-MM-DD');

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
        {isPro && (
          <span className="property__user-status">
          Pro
          </span>
        )}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: commentRating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {userComment}
        </p>
        <time className="reviews__time" dateTime={commentDateTime}>{commentDate}</time>
      </div>
    </li>
  );
}

export default Comment;
