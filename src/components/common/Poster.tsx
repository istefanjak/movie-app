import { PosterProps, PosterSize } from "@/types/types";
import React, { CSSProperties, FC, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { getPosterUrl } from "@/utils/api";
import PlaceholderImage from "@/components/common/PlaceholderImage";
import FavoriteButton from "@/components/favorites/FavoriteButton";

const Poster: FC<PosterProps> = ({
  entity,
  linkUrl,
  className = "",
  showLikeButton = false,
  small = false,
}) => {
  const resolution: PosterSize = small ? "w92" : "w185";
  const style: CSSProperties = small
    ? { width: "92px", height: "138px" }
    : { width: "185px", height: "278px" };

  let image: ReactElement;

  if (entity.posterPath) {
    image = (
      <Image
        src={getPosterUrl(entity.posterPath, resolution)}
        alt={entity.title + " poster"}
        fill
        sizes={resolution.split("w")[1] + "px"}
        className="rounded-md object-contain"
      />
    );
  } else {
    image = <PlaceholderImage />;
  }

  const favoriteButton = (
    <div className="absolute bottom-0 right-0">
      <FavoriteButton entity={entity} />
    </div>
  );

  if (linkUrl) {
    return (
      <div className={"relative" + className}>
        <Link href={linkUrl} className="block" style={style}>
          {image}
        </Link>
        {showLikeButton && favoriteButton}
      </div>
    );
  }

  return (
    <div className={"relative " + className} style={style}>
      {image}
      {showLikeButton && favoriteButton}
    </div>
  );
};

export default Poster;
