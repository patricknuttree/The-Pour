import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { getAllUserWhiskey } from '../../store/userWhiskeys';
import './UserWhiskeys.css';


const UserWhiskey = () => {
const dispatch = useDispatch()

const sessionUser = useSelector((state) => {
  if(state.session.user){
    return state.session.user
    
  }
  return(
    <Redirect to='/' />
  )
})
// console.log('SESSION USER ID', sessionUser.id)

  useEffect(()=> {
    dispatch(getAllUserWhiskey(sessionUser.id))
  }, [dispatch, sessionUser])

  return (
    <div>
      <h2>User Whiskey</h2>
    </div>
  )
}

export default UserWhiskey;