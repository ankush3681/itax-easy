import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";
import axios from "axios";


export const login = (userDetail) => (dispatch) => { 
  dispatch(loginRequestAction())
  return axios.post(`https://reqres.in/api/login`,userDetail)
  .then((res)=>{
    console.log(res.data);
    dispatch(loginSuccessAction(res.data.token))
  })
  .catch((err)=>{
    dispatch(loginFailedAction());
  })
   
  
};

export const loginRequestAction = () =>{
  return {type : LOGIN_REQUEST}
}

export const loginSuccessAction = (payload) =>{
  return {type : LOGIN_SUCCESS,payload}
}

export const loginFailedAction = () =>{
  return { type : LOGIN_FAILURE}
}

