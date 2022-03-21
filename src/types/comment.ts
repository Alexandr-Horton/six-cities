import { Host } from './offer';

export type CommentData = {
  id: string;
  rating: string;
  comment: string;
}

export type UserComment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: Host;
}

export type BackUserComment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    'avatar_url'?: string;
    avatarUrl: string;
    'id': number;
    'is_pro'?: boolean;
    isPro: boolean;
    'name': string;
  };
}

export type UsersComments = UserComment[]


