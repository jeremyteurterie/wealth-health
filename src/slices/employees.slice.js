import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
  },
  reducers: {
    setUsersData: (state, action) => {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    },
  },
});

export const { setUsersData } = userSlice.actions;
export default userSlice.reducer;
