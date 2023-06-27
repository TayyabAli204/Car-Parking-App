import {createSlice} from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    email: '',
    token: '',
    name:''
  },
  reducers: {
    setEmail: (state, action) => {
      console.log("dkjasf",action.payload)
      state.email = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setName:(state,action)=>{
      state.name=action.payload
    }
  },
});

export const {setEmail, setToken,setName} = userSlice.actions;
export default userSlice.reducer;
