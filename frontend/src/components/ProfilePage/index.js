import React, {useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import * as sessionActions from '../../store/session'
import UserWhiskey from '../UserWhiskeys/UserWhiskeys';
import WhiskeyReview from '../WhiskeyReview/WhiskeyReview';

function ProfilePage() {

  return (
    <div>
      <UserWhiskey />
    </div>
  )
}

export default ProfilePage