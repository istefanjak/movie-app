"use client";

import { API_PATH } from "@/const/apiPaths";
import DetailsHeader from "@/components/details/DetailsHeader";
import GenreDisplay from "@/components/details/GenreDisplay";
import Loading from "@/components/common/Loading";
import Poster from "@/components/common/Poster";
import TvShowInfoDisplay from "@/components/details/TvShowInfoDisplay";
import VoteDisplay from "@/components/common/VoteDisplay";
import { TvShowDetails } from "@/types/types";
import { mapToFavorite } from "@/utils/mappers";
import { fetchApi } from "@/utils/api";
import { useParams } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

const Page: FC = () => {
  const [tvSeries, setTvSeries] = useState<TvShowDetails | null>();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const getMovieInfo = async () => {
      try {
        const res = await fetchApi<TvShowDetails>(
          `${API_PATH.tvSeriesDetails}/${params.id}`
        );
        setTvSeries(res);
      } catch (e) {
        setTvSeries(null);
      }
    };
    getMovieInfo();
  }, [params.id]);

  return (
    <Loading fetchData={tvSeries} className="mx-auto mt-3">
      {tvSeries && (
        <>
          <aside>
            <Poster entity={mapToFavorite(tvSeries)} />
          </aside>
          <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <DetailsHeader
                title={tvSeries.name}
                airDate={tvSeries.first_air_date}
                favorite={mapToFavorite(tvSeries)}
              />
              <GenreDisplay genres={tvSeries.genres} />
              <VoteDisplay
                voteAvg={tvSeries.vote_average}
                voteCnt={tvSeries.vote_count}
              />
            </div>
            <TvShowInfoDisplay tvShow={tvSeries} />
            <div className="font-secondary">{tvSeries.overview}</div>
          </section>
        </>
      )}
    </Loading>
  );
};

export default Page;
