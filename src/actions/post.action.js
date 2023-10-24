import axios from "axios";

export const GET_POST = 'GET_POST';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';

export const getPost = () => {
	return (dispatch) => {
		return axios.get("http://localhost:3000/products").then((res) => {
			dispatch({type: GET_POST, payload: res.data});
		});
	};
}

export const addPost = (data) => {
	return (dispatch) => {
		return axios.post("http://localhost:3000/products", data).then((res) => {
			dispatch({type: ADD_POST, payload: data});
		});
	};
}

export const editPost = (data) => {
	return (dispatch) => {
		return axios.put(`http://localhost:3000/products/${data.id}`, data).then((res) => {
			dispatch({type: EDIT_POST, payload: res.data});
		});
	};
}

export const deletePost = (postId) => {
	return (dispatch) => {
		return axios.delete(`http://localhost:3000/products/${postId}`).then((res) => {
			dispatch({type: DELETE_POST, payload: postId});
		});
	};
}

export const setSelectedCategory = (category) => {
	return {
	  type: SET_SELECTED_CATEGORY,
	  category,
	};
  };
  