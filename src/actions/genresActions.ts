import { Dispatch } from "redux";
import { ADD_GENRES_SUCCESS, AddGenresAction } from "@/actions/types";
import { Genre } from "@/types/types";

export const addGenresAction = (
  dispatch: Dispatch<AddGenresAction>,
  genres: Genre[] | undefined | null
) => {
  dispatch({
    type: ADD_GENRES_SUCCESS,
    payload: genres || [],
  });
};
