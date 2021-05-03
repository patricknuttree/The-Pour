import { useEffect, useState } from "react";
import { useDispatch, useSelector }from "react-redux";
import { NavLink, Redirect, useParams } from "react-router-dom";
import * as userWhiskeyActions from "../../store/userWhiskeys"
import './EditWhiskey.css';

const EditWhiskey = ({whiskey}) => {
  const { id } = useParams()
  const currentWhiskey = useSelector(state => state.userWhiskey[id]);
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  // const currentWhiskey = dispatch()
  console.log('CURRENT WHISKEY', currentWhiskey)
  const whiskeyId = currentWhiskey

  const [name, setName] = useState(currentWhiskey?.name)
  const [distiller, setDistiller] = useState(currentWhiskey?.distiller)
  const [drinkPhoto, setDrinkPhoto] = useState(currentWhiskey?.drinkPhoto)
  const [rating, setRating] = useState(currentWhiskey?.rating)
  const [review, setReview] = useState(currentWhiskey?.review)

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
    if(e.type === "click"){

    }
    return dispatch(userWhiskeyActions.editWhiskey(payload));

    //ATTEMPT AT DELETE BUTTON BOOLEAN SYSTEM
    // const onDelete = async () => {
    //   const wasDeleted = await dispatch(userWhiskeyActions.deleteWhiskey(payload.id))
    //   if (wasDeleted){
    //     <Redirect path='user' />
    //   }
    // }
  }

  const handleDelete = (e) => {
    // e.preventDefault()
    // const deleteData = {id}
    console.log('DELETE DATA',id)
    if(e.type === "click"){
    }
    return dispatch(userWhiskeyActions.removeWhiskey(id))
  }

  return(
    <section className="edit-section">
      <h2>Edit your review of {currentWhiskey.name}</h2>
          <form className="edit-form" onSubmit={handleSubmit}>
            <label className="edit-name-label">Whiskey Name
              <input
                type="text"
                placeholder={`${name}`}
                required
                value={name}
                onChange={updateName}
                />
            </label>
            <label className="edit-name-label">Whiskey Distiller
              <input
                type="text"
                placeholder={`${distiller}`}
                required
                value={distiller}
                onChange={updateDistiller}
                />
            </label>
            <label className="edit-name-label">Photo of {currentWhiskey.name}
              <input
              type="text"
              placeholder={`${drinkPhoto}`}
              value={drinkPhoto}
              onChange={updateDrinkPhoto}
              />
            </label>
            <label className="edit-name-label">Whiskey Rating
              <input
              type="number"
              max="5"
              min="0"
              placeholder={`${rating}`}
              required
              value={rating}
              onChange={updateRating}
              />
            </label>
            <label className="edit-name-label">Whiskey Review
              <input
              type="text"
              placeholder={`${review}`}
              required
              value={review}
              onChange={updateReview}
              />
            </label>
            <button type="submit">Update Whiskey</button>
            <NavLink to={`/profile/${user.id}`}>
              <button id="delete-button" type="click" onClick={handleDelete}>Delete</button>
            </NavLink>
          </form>
    </section>


  )

}

export default EditWhiskey