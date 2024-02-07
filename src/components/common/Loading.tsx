import React, { FC, ReactNode } from "react";
import Spinner from "@/components/common/Spinner";

const Loading: FC<{
  fetchData: any;
  children: ReactNode;
  className?: string;
}> = ({ fetchData, children, className = "" }) => {
  const loadingTemplate: ReactNode = (
    <div className={className}>
      <Spinner />
    </div>
  );
  const errorTemplate: ReactNode = (
    <div className={className}>Error fetching data</div>
  );

  if (fetchData === undefined) {
    return loadingTemplate;
  }

  if (fetchData === null) {
    return errorTemplate;
  }

  return children;
};

export default Loading;
