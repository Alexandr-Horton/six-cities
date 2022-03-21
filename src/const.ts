export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = ''
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum HttpCode {
  Unauthorized = 401,
  NotFound = 404,
  BadRequest = 400
}

export enum APIRoute  {
  Cards = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
  Comments = '/comments',
  Favorites = '/favorite'
}

export const ratingStarSetting: {[key: string]: string} = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
} as const;

export const SortType = {
  Popular: 'Popular',
  PriceUp: 'Price: low to high',
  PriceDown: 'Price: high to low',
  RatingDown: 'Top rated first',
} as const;

export enum FailMessage {
  Auth = 'something went wrong',
  SendComment = 'there was an error posting your comment, please try again',
  ChangeFavorite = 'failed to add to favorites, please try again',
  Nearby = 'could not load offers nearby, please try refreshing the page',
  LoadComments = 'failed to load comments, please refresh the page',
}

export const citiesList = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum DefaultSettingApp {
  City = 'Paris',
  SortedType = 'Popular'
}
