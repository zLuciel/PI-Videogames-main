import { GENERO_FILTER, GET_CREATE_FILTER, GET_DETAILS, GET_GAMES, GET_GENEROS, GET_SEARCH, POST_CREATE, SORT} from "../actions-types/action-types";
const URL = "http://localhost:3001/videogames"
//const url = process.env.REACT_APP_API_URL;

export const getGames = () => {
  return function (dispatch) {
    fetch(URL)
    .then(res => res.json())
    .then(data => dispatch({type:GET_GAMES,payload:data}));
  };
};

export const getDetails = (id) => {
  return function (dispatch) {
    fetch(`${URL}/${id}`)
    .then(res => res.json())
    .then(data => dispatch({type:GET_DETAILS,payload:data}));
  };
};

export const getGeneros = () => {
  return function (dispatch) {
    fetch(`http://localhost:3001/genres`)
    .then(res => res.json())
    .then(data => dispatch({type:GET_GENEROS,payload:data}));
  };
};

export const getSearch = (name) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/videogames?name=${name}`)
    .then(res => res.json())
    .then(data => dispatch({type:GET_SEARCH,payload:data}));
  };
};

export const postCreate = (create)=>{
  console.log(create,45);
  return (dispatch) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(create)
    };
    fetch('http://localhost:3001/videogames', requestOptions)
      .then(response => response.json())
      .then(data => {
        dispatch({ type:POST_CREATE, payload:data});
      })
   }
}
export const getCreateFilter = (type)=>{
  return {type:GET_CREATE_FILTER,payload:type}
}
export const bySort = (obj)=>{
  return {type:SORT,payload:obj}
}

export const generoFilter = (type)=>{
  console.log(type);
  return {type:GENERO_FILTER,payload:type}
}
