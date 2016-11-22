import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

import layout from './layout';

const rootReducer = combineReducers({
  layout : layout,
  routing : routerReducer
});

export default rootReducer;