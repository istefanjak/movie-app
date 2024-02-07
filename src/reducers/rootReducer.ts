import { combineReducers } from "@reduxjs/toolkit";
import { genresReducer } from "@/reducers/genresReducer";
import { favoritesReducer } from "@/reducers/favoritesReducer";

const rootReducer = combineReducers({
  genres: genresReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
