import React from "react";
import { format } from "timeago.js";

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li className="">
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{format(publishedAt)}</p>
      </div>
    </li>
  );
}
