import { createReducer } from '@reduxjs/toolkit';
import { DefaultSettingApp } from '../../const';
import { AppState } from '../../types/state';
import { changeCity, changeSortType } from '../action';

const initialState: AppState = {
  currentCity: DefaultSettingApp.City,
  currentSortType: DefaultSettingApp.SortedType,
};

const app = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;
      state.currentCity = city;
    })
    .addCase(changeSortType, (state, action) => {
      const {sortType} = action.payload;
      state.currentSortType = sortType;
    });
});

export {app};
