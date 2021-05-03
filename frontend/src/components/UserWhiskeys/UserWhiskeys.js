import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { getAllUserWhiskey } from '../../store/userWhiskeys';
import WhiskeyReview from '../WhiskeyReview/WhiskeyReview';
import './UserWhiskeys.css';

const UserWhiskey = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.session.user)
  const userWhisk = useSelector((state) => {
    const data = state.userWhiskey;
    return data
  },
  )
  // console.log( 'USERWHISK', userWhisk)

  const userWhiskKeys = Object.keys(userWhisk)
  // console.log(userWhiskKeys)


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
      <div className="all-userwhisk-container">
        
          <h2 id="userwhisk-name">{user.username}'s Whiskeys</h2>
          {userWhiskKeys.map((whiskey) => {
            return (
              <div className="userWhiskeys-container">
                <div className="uw-photo-container">
                  <img alt="" className="uw-photo" src={userWhisk[whiskey].drinkPhoto} />
                </div>
                  <div className="review-info-container">
                  <div className="other-info-container">
                    <div className="uw-name"> {userWhisk[whiskey].name} </div>
                    <div className="whiskey-review" >
                      <WhiskeyReview individualWhiskey = {userWhisk[whiskey]} />
                    </div>
                  </div>
                  <div className="rating-container">
                    <h3>Rating</h3>
                    <div className="uw-rating">{userWhisk[whiskey].rating} </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default UserWhiskey;