const ALL_USER_WHISKEYS = 'userWhiskeys/allUserWhiskey'
const SET_WHISKEY = 'userWhiskeys/setWhiskey'
//Action
const allUserWhiskey = (userWhiskey) => {
  return {
    type: ALL_USER_WHISKEYS,
    userWhiskey,
  };
};

const setWhiskey = (whiskey) => {
  return {
    type: SET_WHISKEY,
    payload: whiskey
  }
}
//Action



//Thunk Action Creator
export const getAllUserWhiskey = (id) => async (dispatch) => {
  const res = await fetch(`/api/profile/whiskeys`)
  const userWhiskey = await res.json()
  // console.log('REDUCER' ,userWhiskey)
  dispatch(allUserWhiskey(userWhiskey))
  return userWhiskey
}

export const pourWhiskey = (whiskey) => async (dispatch) => {
  const { userId, name, distiller, drinkPhoto, rating, review } = whiskey;
  const response = await fetch("/api/profile/whiskeys", {
    method: "POST",
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
//Action Creator

//Reducer
const initialState = {};

export default function userWhiskeyReducer(state = initialState, action){
  let newState;
  switch(action.type){
    case SET_WHISKEY:
      newState = Object.assign({}, state);
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