import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function CardSkeleton({ item, channel }) {
    return (
      <li className="card">
        <a
          href={`https://www.youtube.com/watch?v=${item.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          <Skeleton count={1} className="card-image" style={{width: "200px", height: "200px"}} />
          <Skeleton count={1} className="channel-image" />
          <Skeleton count={1} className="card-title" />
          <Skeleton count={1} className="card-channel" />
          <Skeleton count={1} className="card-metrics" />
          <div className="card-metrics">
          <Skeleton count={1} className="" />
          <Skeleton count={1} className="" />
          </div>
        </a>
      </li>
    );
  }