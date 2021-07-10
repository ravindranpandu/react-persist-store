import { useContext, useState } from 'react';
import { store } from 'src/store';
import { ACTION_TYPES, API_END_POINTS } from 'src/constants';
import { ApiRequest } from 'src/utils';
import './styles.css';

export const Home = () => {
  const { state, dispatch } = useContext(store);
  const [loading, setLoading] = useState(false);

  const loginUser = async () => {    
    try {
      if (state.user.first_name) {
        dispatch({ 
          type: ACTION_TYPES.USER_LOGOUT
        });
      } else {
        setLoading(true);
        const response = await ApiRequest.fetch({
          method: 'GET',
          url: API_END_POINTS.USER
        });
        const { data } = response.data;        
        dispatch({ 
          type: ACTION_TYPES.USER_LOGIN, 
          payload: data
        })        
      }      
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={loginUser}>
        {
          loading 
          ? 
            'Loading...' 
          : 
            state.user.first_name
            ?
              `Logout ${state.user.first_name} ${state.user.last_name}`
            :
              'Log In'
        }        
      </button>
    </>
  )
};