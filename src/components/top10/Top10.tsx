import { Movie, Top10Props, TvShow } from "@/types/types";
import React, { FC } from "react";
import Slider from "react-slick";
import Loading from "@/components/common/Loading";
import Poster from "@/components/common/Poster";
import Link from "next/link";
import { mapToFavorite } from "@/utils/mappers";
import { API_PATH } from "@/const/apiPaths";

const Top10: FC<Top10Props<Movie | TvShow>> = ({
  data,
  description,
  showPosterOrdinal = false,
}) => {
  const cardCount = 10;

  const isMovie = (data: Movie | TvShow) => "title" in data;

  const renderMovie = (data: Movie | TvShow, index: number) => {
    return (
      <div key={data.id}>
        <div className="flex items-end">
          {showPosterOrdinal && (
            <div className="text-9xl font-extrabold font-secondary opacity-40 -mr-4">
              {index + 1}
            </div>
          )}
          <Poster
            entity={mapToFavorite(data)}
            linkUrl={`${
              isMovie(data) ? API_PATH.movieDetails : API_PATH.tvSeriesDetails
            }/${data.id}`}
            showLikeButton
          />
        </div>
      </div>
    );
  };

  const emptyTemplate = <div className="font-tertiary">Nema podataka</div>;

  const slider = (
    <Loading fetchData={data}>
      <Slider variableWidth infinite={false} slidesToScroll={4} speed={500}>
        {(data?.length && data.slice(0, cardCount).map(renderMovie)) ||
          emptyTemplate}
      </Slider>
    </Loading>
  );

  if (!description) {
    return slider;
  }

  return (
    <section className="flex flex-col md:flex-row gap-5">
      <div className="flex flex-col gap-5 justify-between">
        <div className="flex flex-col gap-5">
          <div className="font-bold text-xl">{description.title}</div>
          <div className="font-secondary">{description.text}</div>
        </div>
        {description.link && (
          <div className="font-tertiary hover:text-white">
            <Link href={description.link.href}>{description.link.text}</Link>
          </div>
        )}
      </div>

      <div className="md:w-3/4">{slider}</div>
    </section>
  );
};

export default Top10;
