"use client";

import { API_PATH } from "@/const/apiPaths";
import TabLayout from "@/components/layout/TabLayout";
import SearchResults from "@/components/search/SearchResults";
import { useParams } from "next/navigation";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/reducers/types";
import { findGenreId } from "@/utils/genreUtils";

const Page: FC = () => {
  const { query } = useParams<{ query: string }>();
  const genres = useSelector((state: RootState) => state.genres.genres);

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-3xl font-primary">Pretraga</h2>
      <TabLayout
        tabs={[
          {
            title: "Naslov",
            content: (
              <SearchResults
                query={query}
                path={API_PATH.search}
                params={{ query }}
              />
            ),
          },
          {
            title: "Žanr",
            content: (
              <SearchResults
                query={query}
                path={API_PATH.discover}
                params={{
                  with_genres: findGenreId(genres, query)?.toString() ?? "-1",
                }}
              />
            ),
          },
          {
            title: "Godina",
            content: (
              <SearchResults
                query={query}
                path={API_PATH.discover}
                params={{
                  primary_release_year: query,
                }}
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default Page;
