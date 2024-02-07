import NewMovies from "@/components/top10/NewMovies";
import NewTvSeries from "@/components/top10/NewTvSeries";
import PopularByGenre from "@/components/top10/PopularByGenre";
import React, { FC } from "react";

const Page: FC = () => {
  return (
    <div className="flex flex-col gap-28">
      <section className="flex flex-col gap-5">
        <h2 className="text-3xl font-primary">Novi filmovi</h2>
        <NewMovies showDescription={false} />
      </section>

      <section className="flex flex-col gap-5">
        <h2 className="text-3xl font-primary">Nove serije</h2>
        <NewTvSeries showDescription={false} />
      </section>

      <PopularByGenre />
    </div>
  );
};

export default Page;
