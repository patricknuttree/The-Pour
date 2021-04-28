import { login } from '../../store/session';
import { useDispatch } from 'react-redux';

function DemoButton(){
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(login({credential: 'Demo-lition', password: 'password'}))

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