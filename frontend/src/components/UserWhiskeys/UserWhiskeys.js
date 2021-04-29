import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { getAllUserWhiskey } from '../../store/userWhiskeys';
import WhiskeyReview from '../WhiskeyReview/WhiskeyReview';
import './UserWhiskeys.css';


const UserWhiskey = () => {

  const dispatch = useDispatch()
  const userWhisk = useSelector((state) => {
    const data = state.userWhiskey;
    return data
  },
  )
  // console.log( 'USERWHISK', userWhisk)

  const userWhiskKeys = Object.keys(userWhisk)
  console.log(userWhiskKeys)
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
  }, [dispatch, sessionUser.id])
  

  return (
    <div>
      <h2>User Whiskeys</h2>
      <ul>
        {userWhiskKeys.map((whiskey) => {
          return (
            <div className='whiskeyList'>
              <li>
                <img src={userWhisk[whiskey].drinkPhoto} />
              </li>
              <li>
              {userWhisk[whiskey].name}
              </li>
              <li>
              Rating: {userWhisk[whiskey].rating}
              </li>
              <li>
                <WhiskeyReview individualWhiskey = {userWhisk[whiskey]} />
              </li>
          </div>
          )
        })}
      </ul>


    </div>
  )
}

export default UserWhiskey;