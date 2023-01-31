export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVİE";
export const FAVORİTE_ARRAY = "FAVORİTE_ARRAY";
export const FAVORITE_DELETE = "FAVORITE_DELETE";

export const deleteMovie = (id) => {
  return { type: DELETE_MOVIE, payload: id };
};
export const addMovie = (payload) => {
  return { type: ADD_MOVIE, payload };
};
export const favoriteArray = (payload) => {
  return { type: FAVORİTE_ARRAY, payload };
};
export const favoriteArrayDelete = (payload) => {
  return { type: FAVORITE_DELETE, payload };
};
