const ALL_USER_WHISKEYS = 'userWhiskeys/allUserWhiskey'
const SET_WHISKEY = 'userWhiskeys/setWhiskey'

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
  const response = await fetch("/api/profile/create/whiskey", {
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
  dispatch(setWhiskey(data.whiskey)); 
  return response;
}

//UPDATE A WHISKEY ROUTE
export const editWhiskey = (whiskey) => async (dispatch) => {
  const { whiskeyId, name, distiller, drinkPhoto, rating, review } = whiskey;
  const response = await fetch("/api/profile/edit/whiskey",{
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body:JSON.stringify({
      whiskeyId,
      name,
      distiller,
      drinkPhoto,
      rating,
      review
    })
  })
  const data = await response.json();
  dispatch(setWhiskey(data.whiskey));
  return response;
}


//Action Creator

//Reducer
const initialState = {};

export default function userWhiskeyReducer(state = initialState, action){
  let newState;
  switch(action.type){
    case SET_WHISKEY:
      newState = Object.entries(state);
      newState.whiskey = action.payload;
      return newState
    case ALL_USER_WHISKEYS: 
    return {
      ...state, 
      ...action.userWhiskey
    }
    default:
      return state
  }
}