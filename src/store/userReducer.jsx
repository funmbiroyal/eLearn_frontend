import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    photo: '',
    lastLogin: '',
    level: '',
    role: '',
    roles: [],
    token: '',
  },
  loading: false,
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    reset(state) {
      state.user = initialState.user;
      state.loading = false;
    },
  },
});

export default usersSlice.reducer;
export const { setUser, reset } = usersSlice.actions;
