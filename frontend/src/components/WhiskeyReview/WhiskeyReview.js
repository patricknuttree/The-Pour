import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import './WhiskeyReview.css';

const WhiskeyReview = ({ individualWhiskey }) => {
  // console.log('INDIVIDUAL WHISKEY', individualWhiskey)

  return (
    <div>
      <div>Your Thoughts: {individualWhiskey.review}</div>
      <div>Distillery: {individualWhiskey.distiller}</div>
      <NavLink to='/update'>
       <button type='button'>Update</button>
      </NavLink>
      <button>Delete</button>
    </div>
  )
}

export default WhiskeyReview;