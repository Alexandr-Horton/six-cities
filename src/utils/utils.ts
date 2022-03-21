import dayjs from 'dayjs';
import { BackUserComment, UserComment } from '../types/comment';
import { BackOffer, Offer } from '../types/offer';
import { BackUser, User } from '../types/user';

export const getRating = (rating: number): string => `${(Math.round(rating) / 5) * 100}%`;

export const getFormatDate = (date: string, format: string): string => dayjs(date).format(format);

export const getRandomArrayElement = (arr: string[]): string => arr[Math.floor(Math.random() * arr.length)];

export const adaptToClient = (card: BackOffer): Offer => {
  const adaptedCard = Object.assign(
    {},
    card,
    {
      isFavorite: card.is_favorite,
      isPremium: card.is_premium,
      maxAdults: card.max_adults,
      previewImage: card.preview_image,
    },
    {
      host: {
        ...card.host,
        avatarUrl: card.host.avatar_url,
        isPro: card.host.is_pro,
      },
    },
  ) as Offer;

  delete adaptedCard.is_favorite;
  delete adaptedCard.is_premium;
  delete adaptedCard.max_adults;
  delete adaptedCard.preview_image;
  delete adaptedCard.host.avatar_url;
  delete adaptedCard.host.is_pro;

  return adaptedCard;
};

export const adaptUserDataToClient = (userData: BackUser): User => {
  const adaptedUserData = Object.assign(
    {},
    userData,
    {
      avatarUrl: userData.avatar_url,
      isPro: userData.is_pro,
    },
  );

  delete adaptedUserData.avatar_url;
  delete adaptedUserData.is_pro;

  return adaptedUserData;
};

export const adaptUsersCommentsToClient = (userComment: BackUserComment): UserComment => {
  const adaptedComments = Object.assign(
    {},
    userComment,
    {
      user: {
        ...userComment.user,
        avatarUrl: userComment.user.avatar_url,
        isPro: userComment.user.is_pro,
      },
    },
  );

  delete adaptedComments.user.avatar_url;
  delete adaptedComments.user.is_pro;

  return adaptedComments;
};
