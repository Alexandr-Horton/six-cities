import { DefaultSettingApp } from '../../const';
import { makeFakeCity, makeFakeSortType } from '../../utils/mocks';
import { changeCity, changeSortType } from '../action';
import { app } from './app';

const state = {
  currentCity: DefaultSettingApp.City,
  currentSortType: DefaultSettingApp.SortedType,
};

describe('Reducer: app', () => {
  it('without additional parameters should return initial state', () => {
    expect(app(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({...state});
  });

  it('should change the name of the selected city', () => {
    const city = makeFakeCity();

    expect(app(state, changeCity(city)))
      .toEqual({
        ...state,
        currentCity: city,
      });
  });

  it('you should change the type of the selected sorting type', () => {
    const sortType = makeFakeSortType();

    expect(app(state, changeSortType(sortType)))
      .toEqual({
        ...state,
        currentSortType: sortType,
      });
  });
});
