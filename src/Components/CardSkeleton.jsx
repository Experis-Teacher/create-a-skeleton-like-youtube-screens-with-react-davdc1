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
            <div style={{display: "flex", flexDirection: "column"}}>
          <Skeleton count={1} className="card-image" style={{width: "300px", height: "170px"}} />
          <Skeleton count={1} className="channel-image" style={{borderRadius: "100%", width: "40px", height: "40px"}} />
          <Skeleton count={1} className="card-title" />
          <Skeleton count={1} className="card-channel" style={{width: "250px"}} />
          <Skeleton count={1} className="card-metrics" style={{width: "100px"}} />
          <div className="card-metrics">
          <Skeleton count={1} className="" style={{width: "40px"}} />
          <Skeleton count={1} className="channel-image" style={{borderRadius: "100%", width: "6px", height: "6px", marginRight: "4px", marginLeft: "4px"}} />
          <Skeleton count={1} className="" style={{width: "40px"}}/>
          </div>

            </div>
        </a>
      </li>
    );
  }