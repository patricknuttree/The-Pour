import { csrfFetch } from "./csrf";
import { REMOVE_USER } from "./session"

const ALL_USER_WHISKEYS = 'userWhiskeys/allUserWhiskey'
const SET_WHISKEY = 'userWhiskeys/setWhiskey' 
const DELETE_WHISKEY = 'userWhiskey/deleteWhiskey'

//Action
const allUserWhiskey = (userWhiskey) => {
  return {
    type: ALL_USER_WHISKEYS,
    userWhiskey,
  };
};

const setWhiskey = (payload) => {
  return {
    type: SET_WHISKEY,
    payload
  }
}

const deleteWhiskey = (id) => {
  return {
    type: DELETE_WHISKEY,
    id
  }
}
//Action


//Thunk Action Creator
//GETTING THE WHISKEYS FRONT END ROUTE
export const getAllUserWhiskey = (id) => async (dispatch) => {
  const res = await fetch(`/api/profile/${id}/whiskeys`)
  const userWhiskey = await res.json()
  // console.log('REDUCER' ,userWhiskey)
  dispatch(allUserWhiskey(userWhiskey))
  // return userWhiskey
}

//CREATE WHISKEY FRONT END ROUTE
export const pourWhiskey = (whiskey) => async (dispatch) => {
  const { userId, name, distiller, drinkPhoto, rating, review } = whiskey;
  const response = await csrfFetch("/api/profile/create/whiskey", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      userId,
      name,
      distiller,
      drinkPhoto,
      rating,
      review,
    }),
  });
  const data = await response.json();
  // console.log(data)
  // dispatch(setWhiskey(data.whiskey)); 
  return response;
}

//UPDATE A WHISKEY ROUTE
export const editWhiskey = (whiskey) => async (dispatch) => {
  const { id, name, distiller, drinkPhoto, rating, review } = whiskey;
  const response = await csrfFetch(`/api/profile/edit/${id}`,{
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body:JSON.stringify({
      id,
      name,
      distiller,
      drinkPhoto,
      rating,
      review
    })
  })
  const data = await response.json();
  // console.log('DATA THUNK',data)
  dispatch(setWhiskey(data));
  return response;
}
//DELETE WHISKEY THUNK
export const removeWhiskey = (id) => async (dispatch) => {

  const response = await csrfFetch(`/api/profile/edit/${id}`, {
    method: "DELETE",
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify({
      id
    })
  })
  await response.json();
  dispatch(deleteWhiskey(id));
  return response
}


//Action Creator

//Reducer
const initialState = {};

export default function userWhiskeyReducer(state = initialState, action){
  let newState;
  switch(action.type){
    case SET_WHISKEY:
      // console.log(action.payload)
      newState = { ...state }
      newState[action.payload.id] = action.payload;
     return newState
    case DELETE_WHISKEY: {
      newState = { ...state};
      delete newState[action.id]
      return newState
    }
    case ALL_USER_WHISKEYS: 
      newState = { ...state };
      action.userWhiskey.forEach((whiskey) => {
      newState[whiskey.id] = whiskey
    })
    return newState
    case REMOVE_USER:
      return {}
    default:
      return state
    }
  }