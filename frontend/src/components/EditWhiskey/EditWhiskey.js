import { useEffect, useState } from "react";
import { useDispatch, useSelector }from "react-redux";
import { useParams } from "react-router-dom";
import * as userWhiskeyActions from "../../store/userWhiskeys"
import './EditWhiskey.css';

const EditWhiskey = ({whiskey}) => {
  const { id } = useParams()
  const currentWhiskey = useSelector(state => state.userWhiskey[id]);
  const dispatch = useDispatch();
  // const currentWhiskey = dispatch()
  // console.log('CURRENT WHISKEY', currentWhiskey)
  const whiskeyId = currentWhiskey

  const [name, setName] = useState(currentWhiskey.name)
  const [distiller, setDistiller] = useState(currentWhiskey.distiller)
  const [drinkPhoto, setDrinkPhoto] = useState(currentWhiskey.drinkPhoto)
  const [rating, setRating] = useState(currentWhiskey.rating)
  const [review, setReview] = useState(currentWhiskey.review)

  const updateName = (e) => setName(e.target.value)
  const updateDistiller = (e) => setDistiller(e.target.value)
  const updateDrinkPhoto = (e) => setDrinkPhoto(e.target.value)
  const updateRating = (e) => setRating(e.target.value)
  const updateReview = (e) => setReview(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
  
    const payload = {
    id,
    name,
    distiller,
    drinkPhoto,
    rating,
    review
  }
    // console.log('PAYLOAD', payload)
    return dispatch(userWhiskeyActions.editWhiskey(payload));
  }

  return(
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={`${name}`}
          required
          value={name}
          onChange={updateName}
          />
        <input
          type="text"
          placeholder={`${distiller}`}
          required
          value={distiller}
          onChange={updateDistiller}
          />
          <input
          type="text"
          placeholder={`${drinkPhoto}`}
          value={drinkPhoto}
          onChange={updateDrinkPhoto}
          />
          <input
          type="number"
          max="5"
          min="0"
          placeholder={`${rating}`}
          required
          value={rating}
          onChange={updateRating}
          />
          <input
          type="text"
          placeholder={`${review}`}
          required
          value={review}
          onChange={updateReview}
          />
        <button type="submit">Update Whiskey</button>
      </form>
    </section>


  )

}

export default EditWhiskey