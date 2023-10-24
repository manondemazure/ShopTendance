import { combineReducers } from "redux";
import postReducer from "./post.reducer";
import { selectedCategoryReducer } from "./post.reducer";

export default combineReducers({
	postReducer,
	selectedCategory: selectedCategoryReducer,
});