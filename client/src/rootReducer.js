import { combineReducers } from 'redux';
import reducer from './pages/ThreadsPage/reducer';

const rootReducer = combineReducers({
  threads:reducer
});

export default rootReducer;
