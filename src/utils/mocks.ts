import { address, name } from 'faker/locale/ru';
import  faker from 'faker/locale/ru';
import { UserComment } from '../types/comment';
import { Offer } from '../types/offer';
import { User } from '../types/user';

export const makeFakeCity = (): string => address.cityName();
export const makeFakeSortType = (): string => name.firstName();

export const makeFakeComments: UserComment = {
  comment: faker.lorem.paragraph(),
  date: faker.date.between(new Date(Math.random()), new Date()).toISOString(),
  id: faker.datatype.number(),
  rating: faker.datatype.number(5),
  user: {
    avatarUrl: faker.internet.avatar(),
    id: faker.datatype.number(),
    isPro: faker.datatype.boolean(),
    name: faker.name.firstName(),
  },
};

export const makeFakeOffer: Offer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  host: {
    avatarUrl: 'img/1.png',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/1.png', 'img/2.png'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/1.png',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
};

export const makeFakeUserData: User = {
  avatarUrl: faker.internet.avatar(),
  email: faker.internet.email(),
  id: faker.datatype.number(10),
  isPro: faker.datatype.boolean(),
  name: faker.internet.userName(),
};

