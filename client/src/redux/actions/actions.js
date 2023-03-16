import axios from 'axios';
import { GENERO_FILTER, GET_CREATE_FILTER, GET_DETAILS, GET_GAMES, GET_GENEROS, GET_SEARCH, POST_CREATE, SORT} from "../actions-types/action-types";

export const getGames = () => async (dispatch) => {
  try {
    const res = await axios.get("/videogames");
    dispatch({type:GET_GAMES,payload:res.data});
  } catch (error) {
    console.log(error);
  }
};

export const getDetails = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/videogames/${id}`);
    dispatch({type:GET_DETAILS,payload:res.data});
  } catch (error) {
    console.log(error);
  }
};

export const getGeneros = () => async (dispatch) => {
  try {
    const res = await axios.get(`/genres`);
    dispatch({type:GET_GENEROS,payload:res.data});
  } catch (error) {
    console.log(error);
  }
};

export const getSearch = (name) => async (dispatch) => {
  try {
    const res = await axios.get(`/videogames?name=${name}`);
    dispatch({type:GET_SEARCH,payload:res.data});
  } catch (error) {
    console.log(error);
  }
};

export const postCreate = (create) => async (dispatch) => {
  try {
    const res = await axios.post('/videogames', create);
    dispatch({ type:POST_CREATE, payload:res.data});
  } catch (error) {
    console.log(error);
  }
}

export const getCreateFilter = (type) => {
  return {type:GET_CREATE_FILTER,payload:type}
}

export const bySort = (obj) => {
  return {type:SORT,payload:obj}
}

export const generoFilter = (type) => {
  return {type:GENERO_FILTER,payload:type}
}
