import {createSlice} from '@reduxjs/toolkit';


let userSlice=createSlice({
  name:'user',
  initialState:{
    userObj:{},
    userType:null,
    isLoggedIn:false,
   
  },
  reducers:{
    login:(state,action)=>{

        state.isLoggedIn=true;
        state.userType=action.payload.userType;
        state.userObj=action.payload;
        //api call to get cart
    },
    logout:(state)=>{
      state.isLoggedIn=false;
      state.userObj=null;
      state.userType=null;
      localStorage.clear();
      return state;
  }
  },

})

//export action creators
export const {login, logout}=userSlice.actions;
//export reducer
export default userSlice.reducer



//import { login } from '../slices/userSlice'
//import { useDispatch } from 'react-redux'

//in function
//  const dispatch = useDispatch()
//let actionObj = login(user)
//dispatch(actionObj)


//import {  useSelector } from 'react-redux'
//let isLoggedIn = useSelector(state => state.user.isLoggedIn)