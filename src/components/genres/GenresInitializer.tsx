"use client";

import { addGenresAction } from "@/actions/genresActions";
import { API_PATH } from "@/const/apiPaths";
import { Genre } from "@/types/types";
import { fetchApi } from "@/utils/api";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

const GenresInitializer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAndDispatch = async () => {
      const res = await fetchApi<{ genres: Genre[] }>(API_PATH.genres);
      addGenresAction(dispatch, res.genres);
    };

    fetchAndDispatch();
  }, [dispatch]);

  return <></>;
};

export default GenresInitializer;
