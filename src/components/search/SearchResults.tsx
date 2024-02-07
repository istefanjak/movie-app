"use client";

import { Movie, TmdbPageableResponse } from "@/types/types";
import { fetchApi } from "@/utils/api";
import React, { FC, ReactElement, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "@/components/common/Spinner";
import SearchListItem from "@/components/search/SearchListItem";

const SearchResults: FC<{
  query: string;
  path: string;
  params: Record<string, string>;
}> = ({ query, path, params }) => {
  const [items, setItems] = useState<Movie[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState<number | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchApi<TmdbPageableResponse<Movie>>(path, { params });
      setItems((prev) => {
        const newItems =
          currentPage === 1 ? res.results : [...prev, ...res.results];
        setHasMore(newItems.length !== res.total_results);
        return newItems;
      });
      setTotalResults(res.total_results);
    };
    fetchData();
  }, [currentPage, params, path]);

  const loadingTemplate: ReactElement = (
    <div className="flex justify-center py-3">
      <Spinner />
    </div>
  );

  const renderItem = (item: Movie): ReactElement => {
    return <SearchListItem key={item.id} item={item} />;
  };

  return (
    <div className="flex flex-col gap-5">
      {totalResults !== undefined && (
        <div>
          <span className="">Rezultati pretrage za:</span>
          <span className="font-tertiary ml-3 text-xl">{query}</span>
          <div>
            Broj rezultata:{" "}
            <span className="font-tertiary ml-3 text-xl">{totalResults}</span>
          </div>
        </div>
      )}
      <InfiniteScroll
        dataLength={items.length}
        next={() => setCurrentPage((prev) => prev + 1)}
        hasMore={hasMore}
        loader={loadingTemplate}
        className="flex flex-col gap-6"
      >
        {items.map(renderItem)}
      </InfiniteScroll>
    </div>
  );
};

export default SearchResults;
