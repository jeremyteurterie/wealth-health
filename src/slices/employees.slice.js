// import { createSlice } from '@reduxjs/toolkit';

// export const userDatatSlice = createSlice({
//   user: [],
//   name: 'user',

//   initialState: {
//     user: [],
//   },

//   reducers: {
//     setUsersData: (state, action) => {
//       state.users = action.payload;
//     },
//   },
// });

// export const { setUsersData } = userDatatSlice.actions;
// export default userDatatSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsersData: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { setUsersData } = userSlice.actions;
export default userSlice.reducer;
