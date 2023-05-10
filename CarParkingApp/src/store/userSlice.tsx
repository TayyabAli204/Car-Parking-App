import {createSlice} from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    email: '',
    
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const {setEmail} = userSlice.actions;
export default userSlice.reducer;
