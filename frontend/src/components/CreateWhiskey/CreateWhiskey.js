import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as userWhiskeyActions from "../../store/userWhiskeys"
import './CreateWhiskey.css';

function CreateWhiskeyPage(){

  const sessionUser = useSelector(state => state.session.user);
  // console.log(sessionUser)

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [distiller, setDistiller] = useState("");
  const [drinkPhoto, setDrinkPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const userId = useSelector((state) => state.session.user.id)

  let history = useHistory();

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
    history.push(`/profile/${userId}`)
    return dispatch(userWhiskeyActions.pourWhiskey(payload))
};
  return (
    <section className="create-section">
      <form className="create-form" onSubmit={handleSubmit}>
      <h2>Pour out your whiskey thoughts:</h2>
      <div className="create-field-container">
        <label className="create-name-label">Whiskey Name:</label>
          <input
          className="input-n"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          />
          </div>
      <div className="create-field-container">
        <label className="create-distiller-label">Distiller:</label>
        <input 
            className="input-n"
            type="text"
            value={distiller}
            onChange={(e) => setDistiller(e.target.value)}
            required
            />
        </div>
      <div className="create-field-container">
        <label className="create-drinkPhoto-label">Drink Photo URL:</label>
          <input 
            className="input-n"
            type="text"
            value={drinkPhoto}
            onChange={(e) => setDrinkPhoto(e.target.value)}
            />
        </div>
      <div className="create-rating-container">
        <label className="create-rating-label">rating:</label>
          <input
            className="input-rating"
            type="number"
            max="5"
            min="0"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
            />
        </div>
      <div className="create-review-container">
        <label className="create-review-label">review:</label>
          <input
            className="input-review"
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            />
        </div>
      <div className="create-button">
        <button type="submit">Create New Whiskey Review:</button>
      </div>
      </form>
    </section>
  );
}

export default CreateWhiskeyPage