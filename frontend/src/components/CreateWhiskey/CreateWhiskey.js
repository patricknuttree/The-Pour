import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as userWhiskeyActions from "../../store/userWhiskeys"
import './CreateWhiskey.css';

function CreateWhiskeyPage(){
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [distiller, setDistiller] = useState("");
  const [drinkPhoto, setDrinkPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [errors, setErrors] = useState([]);

  const userId = useSelector((state) => state.session.user.id)
  // console.log('USER ID', userId)
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload ={
      userId,
      name,
      distiller,
      drinkPhoto,
      review,
      rating
    }
    return dispatch(userWhiskeyActions.pourWhiskey(payload))
};
  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label>
        Whiskey Name
        <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        />
      </label>
      <label>
        Distiller
        <input 
          type="text"
          value={distiller}
          onChange={(e) => setDistiller(e.target.value)}
          required
          />
      </label>
      <label>
        Drink Photo URL
        <input 
          type="text"
          value={drinkPhoto}
          onChange={(e) => setDrinkPhoto(e.target.value)}
          />
      </label>
      <label>
        rating
        <input
          type="number"
          max="5"
          min="0"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
          />
      </label>
      <label>
        review
        <input
          type="text"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          />
      </label>
      <button type="submit">Create New Whiskey Review</button>
    </form>
  );
}

export default CreateWhiskeyPage