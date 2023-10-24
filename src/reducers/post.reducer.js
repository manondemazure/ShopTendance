import { ADD_POST, DELETE_POST, EDIT_POST, GET_POST, SET_SELECTED_CATEGORY } from '../actions/post.action';

const initialState = [];

export default function postReducer(state = initialState, action) {
	switch (action.type) {
		case GET_POST:
			return action.payload;
		case ADD_POST:
			return [action.payload, ...state];
		case EDIT_POST:
			return state.map((post) => {
				if (post.id === action.payload.id) {
					return {
						...post,
						title: action.payload.title,
						description: action.payload.description,
						basePrice: action.payload.basePrice,
						salePrice: action.payload.salePrice,
						categories: action.payload.categories,
					};
				} else return post;
			});
		case DELETE_POST:
			return state.filter((post) => post.id !== action.payload);
		default:
			return state;
	}
}


const initialSelectedCategory = 'all';

export function selectedCategoryReducer(state = initialSelectedCategory, action) {
	switch (action.type) {
	  case SET_SELECTED_CATEGORY:
		return action.category;
	  default:
		return state;
	}
  }