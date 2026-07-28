import React from "react";
import VideoPlayer from "../components/VideoPlayer";

const MultimediaTracking = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-full">
        <h2 className="p-2 "> Youtube video tracking</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dcXqhMqhZUo?si=GkpfWD8mQ-h7K7Fy"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="flex flex-col items-center w-full">
        <h2 className="py-4">Custom Video tracking</h2>
        <div className="w-[70%]">
          <VideoPlayer
            src={"https://www.w3schools.com/html/mov_bbb.mp4"}
          ></VideoPlayer>
        </div>
      </div>
    </div>
  );
};

export default MultimediaTracking;
