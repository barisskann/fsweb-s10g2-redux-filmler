import {
  ADD_MOVIE,
  DELETE_MOVIE,
  FAVORİTE_ARRAY,
  FAVORITE_DELETE,
} from "../actions/movieActions.js";
import movies from "../data.js";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
  favoriteArray: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => action.payload != item.id),
      };
    case ADD_MOVIE:
      return { ...state, movies: [...state.movies, action.payload.movie] };
    case FAVORİTE_ARRAY: {
      return {
        ...state,
        favoriteArray: [...state.favoriteArray, action.payload],
      };
    }
    case FAVORITE_DELETE: {
      return {
        ...state,
        favoriteArray: state.favoriteArray.filter(
          (item) => item.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};
export const deleteMovie = (payload) => {
  return { type: DELETE_MOVIE, payload: payload };
};
export default reducer;
