import { login } from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';


function DemoButton(){
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user?.id)
  const history = useHistory();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await dispatch(login({credential: 'Demo-lition', password: 'password'}))
    history.push(`/profile/1`)
  }

  return (
    <form onSubmit={handleSubmit}>
        <button type='submit'>Demo</button>
    </form>
  )
}
// export const login = (user) => async (dispatch) => {
//   const { credential, password } = user;
//   const response = await csrfFetch('/api/session', {
//     method: 'POST',
//     body: JSON.stringify({
//       credential,
//       password,
//     }), 
//   });
//   const data = await response.json();
//   dispatch(setUser(data.user));
//   return response;
// };

export default DemoButton;