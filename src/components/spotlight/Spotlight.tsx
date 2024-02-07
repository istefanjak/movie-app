"use client";

import { API_PATH } from "@/const/apiPaths";
import { TmdbPageableResponse, Trending } from "@/types/types";
import { mapToFavorite } from "@/utils/mappers";
import { getPosterUrl } from "@/utils/api";
import { fetchApi } from "@/utils/api";
import React, { FC, ReactElement, ReactNode, useEffect, useState } from "react";
import Slider from "react-slick";
import Loading from "@/components/common/Loading";
import Image from "next/image";
import Button from "@/components/common/Button";
import Poster from "@/components/common/Poster";
import { Info } from "@phosphor-icons/react";
import PlaceholderImage from "@/components/common/PlaceholderImage";
import Overlay from "@/components/common/Overlay";
import VoteDisplay from "@/components/common/VoteDisplay";
import { useRouter } from "next/navigation";

const Spotlight: FC = () => {
  const cardCount = 7;
  const [trending, setTrending] =
    useState<TmdbPageableResponse<Trending> | null>();

  const router = useRouter();

  const onDetailsButtonClick = (movieId: number) => {
    router.push(`${API_PATH.movieDetails}/${movieId}`);
  };

  useEffect(() => {
    const getTrending = async () => {
      try {
        const res = await fetchApi<TmdbPageableResponse<Trending>>(
          API_PATH.trendingWeekly
        );
        setTrending(res);
      } catch (e) {
        setTrending(null);
      }
    };
    getTrending();
  }, []);

  const getBackground = (item: Trending): ReactElement => {
    if (!item.poster_path) {
      return <PlaceholderImage />;
    }

    return (
      <Image
        src={getPosterUrl(item.poster_path, "original")}
        alt={item.title + " poster"}
        fill
        className="-z-10 object-cover rounded-xl"
      />
    );
  };

  const renderCard = (item: Trending): ReactNode => {
    return (
      <div key={item.id} className="relative p-16">
        {getBackground(item)}
        <Overlay />

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <Poster entity={mapToFavorite(item)} className="flex-none" />
          <div className="flex flex-col gap-3 w-full">
            <h2 className="font-bold font-primary">{item.title}</h2>
            <VoteDisplay
              voteAvg={item.vote_average}
              voteCnt={item.vote_count}
            />
            <p className="font-secondary">{item.overview}</p>
            <div>
              <Button
                type="yellow"
                text="Više informacija"
                icon={<Info />}
                onClick={() => onDetailsButtonClick(item.id)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section>
      <Loading fetchData={trending}>
        <Slider autoplay dots slidesToScroll={1} slidesToShow={1} speed={500}>
          {trending?.results.slice(0, cardCount).map(renderCard)}
        </Slider>
      </Loading>
    </section>
  );
};

export default Spotlight;
