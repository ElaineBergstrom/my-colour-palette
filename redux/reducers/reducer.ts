import {combineReducers} from 'redux';
import coloursReducer from './colours';

export default combineReducers({
  colours: coloursReducer,
});
