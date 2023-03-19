import { GENERO_FILTER, GET_CREATE_FILTER, GET_DETAILS, GET_GAMES, GET_GENEROS, GET_SEARCH, POST_CREATE, SORT } from "../actions-types/action-types";


const initialState = {
  games: [],
  detail:{},
  copia: [],
  generos:[],
  creado:"",
  typePag:null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        typePag:action.payload.type,
        copia: action.payload.games,
        games: action.payload.games,
      };
      case GET_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_CREATE_FILTER:

      const options = {
        all: state.copia,
        db: state.copia.filter((el) => typeof el.id === "string" ),
        api: state.copia.filter((el) => typeof el.id === "number"),
      };
      
      return {
        ...state,
        typePag:20,
        games: options[action.payload],
      };
      case GET_GENEROS:return{
        ...state,
        generos: action.payload.map(gen => gen.name)
      }
      case GENERO_FILTER:
      return{
        ...state,
        games: state.copia.filter(game => game.genres.some(genre => genre === action.payload))
      }
      case GET_SEARCH:
        return{
          ...state,
          typePag:action.payload.type,
          games: action.payload.games
        }
        case SORT:
          const sortOptions = {
            name: {
              asc: (a, b) => a.name.localeCompare(b.name),
              desc: (a, b) => b.name.localeCompare(a.name),
            },
            rating: {
              asc: (a, b) => b.rating - a.rating,
              desc: (a, b) => a.rating - b.rating,
            },
          };
          return {
            ...state,
            games: [...state.copia].sort(sortOptions[action.payload.type][action.payload.sort])
          };
          case POST_CREATE:
        return{
          ...state,
          creado: action.payload
        }
    //**aqui termina */
    default:
      return { ...state };
  }
};
export default reducer;
