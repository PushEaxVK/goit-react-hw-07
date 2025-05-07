import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOps';

const initialState = { items: [], isLoading: false, error: null };

// файл слайсу для контактів
const slice = createSlice({
  name: 'contacts',
  initialState,
  // initialState: {
  //   items: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   loading: false,
  //   error: null,
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
  // reducers: {
  //   addContact: (state, action) => {
  //     state.items.push(action.payload);
  //   },
  //   deleteContact: (state, action) => {
  //     state.items = state.items.filter(
  //       (contact) => contact.id !== action.payload
  //     );
  //   },
  // },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
