import axios from 'axios';
import * as actions from '../createActions/createActions';

const api = ({dispatch}) => next => async action => {
    if (action.type !== actions.apiFetchBegan.type) return next(action);

    const {url, method, data, onStart, onSuccess, onError} = action.payload;

    if (onStart) dispatch({type: onStart});

    next(action);

    try {
      const response = await axios.request({
        baseURL: 'http://localhost:9001/api',
        url,
        method,
        data,
      });
      // General
      dispatch(actions.apiFetchSuccess(response.data));
      // Specific
      if (onSuccess) dispatch({type: onSuccess, payload: response.data});
    } catch (error) {
      // General
      dispatch(actions.apiFetchFailed(error.message));
      // Specific
      if (onError) dispatch({type: onError, payload: error.message});
    }
  };

export default api;
