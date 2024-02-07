import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const StreamingServiceIcon: FC<{ fileName: string; className?: string }> = ({
  fileName,
  className = "",
}) => {
  return (
    <Link href="#" className={className}>
      <Image
        src={`/assets/images/icons/${fileName}`}
        alt={fileName.replace("_", " ")}
        width={48}
        height={48}
        className="rounded-lg"
      />
    </Link>
  );
};

export default StreamingServiceIcon;
