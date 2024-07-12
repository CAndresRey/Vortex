import { combineReducers } from '@reduxjs/toolkit';
import SidebarReducer from '../modules/Home/slices/Sidebar.slice';

const reducers = combineReducers({
  sidebar: SidebarReducer,
});


export default reducers;