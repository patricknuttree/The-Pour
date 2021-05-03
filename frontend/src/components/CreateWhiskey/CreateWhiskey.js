import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as userWhiskeyActions from "../../store/userWhiskeys"
import './CreateWhiskey.css';

function CreateWhiskeyPage(){
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [distiller, setDistiller] = useState("");
  const [drinkPhoto, setDrinkPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

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
    <section className="create-section">
      <form className="create-form" onSubmit={handleSubmit}>
      <h2>Pour out your whiskey thoughts:</h2>
        <label className="create-name-label">
          Whiskey Name
          <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          />
        </label>
        <label className="create-distiller-label">
          Distiller
          <input 
            type="text"
            value={distiller}
            onChange={(e) => setDistiller(e.target.value)}
            required
            />
        </label>
        <label className="create-drinkPhoto-label">
          Drink Photo URL
          <input 
            type="text"
            value={drinkPhoto}
            onChange={(e) => setDrinkPhoto(e.target.value)}
            />
        </label>
        <label className="create-rating-label">
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
        <label className="create-review-label">
          review
          <input
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            />
        </label>
        <button type="submit">Create New Whiskey Review</button>
      </form>
    </section>
  );
}

export default CreateWhiskeyPage