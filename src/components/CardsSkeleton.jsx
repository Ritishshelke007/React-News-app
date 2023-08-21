import React from "react";
import Skeleton from "react-loading-skeleton";

const CardsSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <div
        key={i}
        className="mx-auto -z-10 w-[300px] h-[450px] shadow-lg rounded-lg  overflow-y-hidden"
      >
        <div>
          <Skeleton width={300} height={150} />
        </div>
        <div className="px-3 pt-3 overflow-hidden">
          <div className="font-semibold line-clamp-2 h-[50px]">
            <Skeleton count={2} />
          </div>
          <div className="w-1/2  p-2 text-xs rounded-full my-2  h-[30px]">
            <Skeleton count={1} />
          </div>
          <div className="line-clamp-4 leading-7  h-[110px]">
            <Skeleton count={4} />
          </div>
          <div className="mt-2 px-3 py-2 rounded-lg  text-white font-semibold w-1/2">
            <Skeleton count={1} style={{ padding: "10px" }} />
          </div>
        </div>
      </div>
    ));
};

export default CardsSkeleton;
