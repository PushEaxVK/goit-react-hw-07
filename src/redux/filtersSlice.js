import { createSlice } from '@reduxjs/toolkit';

// файл слайсу для фільтрів
const slice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Експортуємо фабрики екшенів
export const { changeFilter } = slice.actions;

export const selectNameFilter = (state) => state.filters.name;

// Експортуємо редюсер слайсу
export default slice.reducer;
