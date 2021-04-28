const ALL_USER_WHISKEYS = 'allUserWhiskey'
//Action
const allUserWhiskey = (userWhiskey) => {
  return {
    type: ALL_USER_WHISKEYS,
    userWhiskey,
  }
}
//Action



//Thunk Action Creator
export const getAllUserWhiskey = (id) => async (dispatch) => {
  const res = await fetch(`/api/profile/whiskeys`)
  const userWhiskey = await res.json()
  console.log('REDUCER' ,userWhiskey)
  dispatch(allUserWhiskey(userWhiskey))
  return userWhiskey
}
//Action Creator

//Reducer
const initialState = {};

export default function userWhiskeyReducer(state = initialState, action){
  switch(action.type){
    case ALL_USER_WHISKEYS: 
    return {
      ...state, 
      ...action.userWhiskey
    }
    default:
      return state
  }
}