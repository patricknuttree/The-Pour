import React from 'react';
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
    <div className="r-info">
      <div className="r-review">Review: {individualWhiskey.review}</div>
      <div className="r-distiller" >Distillery: {individualWhiskey.distiller}</div>
      <NavLink className="r-update"to={`/edit/${individualWhiskey.id}`}>
        Update
        {/* <button  id="r-update" type='button'>Update</button> */}
      </NavLink>
    </div>
  )
}

export default WhiskeyReview;