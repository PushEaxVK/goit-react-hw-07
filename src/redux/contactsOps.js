import axios from 'axios';
import { BASE_URL } from '../services/mockapi';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = BASE_URL;

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/contacts');
  return response.data;
});
