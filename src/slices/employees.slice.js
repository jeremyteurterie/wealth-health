import { createSlice } from '@reduxjs/toolkit';

/**
 * Redux slice for managing user data.
 *
 * @typedef {Object} UserState - The state object for the user slice.
 * @property {Array} users - The array of users.
 *
 * @type {import('@reduxjs/toolkit').Slice<UserState>}
 */
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
