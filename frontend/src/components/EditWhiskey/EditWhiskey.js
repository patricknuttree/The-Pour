import { useState } from "react";
import { useDispatch, useSelector }from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import * as userWhiskeyActions from "../../store/userWhiskeys"
import './EditWhiskey.css';

const EditWhiskey = ({whiskey}) => {

  const history = useHistory()

  const { id } = useParams()
  const currentWhiskey = useSelector(state => state.userWhiskey[id]);
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  // const currentWhiskey = dispatch()
  console.log('CURRENT WHISKEY', currentWhiskey)
  // const whiskeyId = currentWhiskey

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
    history.push(`/profile/${user.id}`)
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
          <form className="create-form" onSubmit={handleSubmit}>
            <h2>Edit your review of {currentWhiskey.name}</h2>
            <div className="create-field-container">
            <label className="edit-name-label">Whiskey Name</label>
              <input
                className="input-n"
                type="text"
                placeholder={`${name}`}
                required
                value={name}
                onChange={updateName}
                />
            </div>
            <div className="create-field-container">
            <label className="edit-name-label">Whiskey Distiller</label>
              <input
                className="input-n"
                type="text"
                placeholder={`${distiller}`}
                required
                value={distiller}
                onChange={updateDistiller}
                />
            </div>
            <div className="create-field-container">
            <label className="edit-name-label">Photo of {currentWhiskey.name}</label>
              <input
              className="input-n"
              type="text"
              placeholder={`${drinkPhoto}`}
              value={drinkPhoto}
              onChange={updateDrinkPhoto}
              />
              </div>
              <div className="create-rating-container">
            <label className="edit-name-label">Whiskey Rating</label>
              <input
              className="input-rating"
              type="number"
              max="5"
              min="0"
              placeholder={`${rating}`}
              required
              value={rating}
              onChange={updateRating}
              />
          </div>
          <div className="create-review-container">
            <label className="edit-name-label">Whiskey Review</label>
              <input
              className="input-review"
              type="text"
              placeholder={`${review}`}
              required
              value={review}
              onChange={updateReview}
              />
              </div>
            <button type="submit">Update Whiskey</button>
            <NavLink to={`/profile/${user.id}`}>
              <button id="delete-button" type="click" onClick={handleDelete}>Delete</button>
            </NavLink>
          </form>
    </section>


  )

}

export default EditWhiskey