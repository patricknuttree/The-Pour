import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import './WhiskeyReview.css';

const WhiskeyReview = ({ individualWhiskey }) => {
  // console.log('INDIVIDUAL WHISKEY', individualWhiskey)

  //ATTEMPT TO FIX UPDATE SELECTOR ERROR
  // const whiskeyViewKeys = useSelector((state) => state.userWhiskeys)
  // const handleClick = (e) => {
  //   const targetWhiskey = e.currentTarget
  //   console.log('CLICK TARGET', targetWhiskey)
  //   return targetWhiskey
  // }
  return (
    <div>
      <div>Your Thoughts: {individualWhiskey.review}</div>
      <div>Distillery: {individualWhiskey.distiller}</div>
      <NavLink to={`/edit/${individualWhiskey.id}`}>
       <button type='button'>Update</button>
      </NavLink>
      <button>Delete</button>
    </div>
  )
}

export default WhiskeyReview;