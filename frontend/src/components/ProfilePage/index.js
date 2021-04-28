import React, {useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import * as sessionActions from '../../store/session'
import UserWhiskey from '../UserWhiskeys/UserWhiskeys';

function ProfilePage({ name, drinkPhoto, rating }) {

  return (
    <div>
      <UserWhiskey />
    </div>
  )
}

export default ProfilePage