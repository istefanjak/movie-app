import { TvShowDetails } from "@/types/types";
import React, { FC } from "react";

const TvShowInfoDisplay: FC<{ tvShow: TvShowDetails }> = ({ tvShow }) => {
  return (
    <div className="inline-block">
      <div className="inline-grid grid-cols-2 gap-x-4 gap-y-1">
        <div>Broj sezona:</div>
        <div>{tvShow.number_of_seasons}</div>

        <div>Popularnost:</div>
        <div>{tvShow.popularity}</div>

        <div>Emitira se na:</div>
        <div>{tvShow.networks.map((network) => network.name).join(", ")}</div>
      </div>
    </div>
  );
};

export default TvShowInfoDisplay;
