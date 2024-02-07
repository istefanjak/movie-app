import { ADD_GENRES_SUCCESS, GenresActions } from "@/actions/types";
import { GenresState } from "@/reducers/types";

const initialState: GenresState = {
  genres: [],
};

export const genresReducer = (
  state = initialState,
  action: GenresActions
): GenresState => {
  switch (action.type) {
    case ADD_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
};
