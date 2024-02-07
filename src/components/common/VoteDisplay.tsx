import { formatVote } from "@/utils/formatters";
import React, { FC } from "react";
import Image from "next/image";

const VoteDisplay: FC<{ voteAvg: number; voteCnt: number }> = ({
  voteAvg,
  voteCnt,
}) => {
  return (
    <div className="flex gap-2 items-center">
      <Image
        src="/assets/images/imdb-logo.png"
        className="h-auto w-auto"
        alt="imdb logo"
        width={24}
        height={10}
      />
      <span>
        {formatVote(voteAvg)} ({voteCnt})
      </span>
    </div>
  );
};

export default VoteDisplay;
