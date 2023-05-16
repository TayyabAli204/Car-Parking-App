import {createSlice} from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    email: '',
    token: '',
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {setEmail, setToken} = userSlice.actions;
export default userSlice.reducer;
