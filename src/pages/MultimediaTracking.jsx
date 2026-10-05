import React from "react";
import VideoPlayer from "../components/VideoPlayer";
// import video from "../assets/exp.mp4";

const MultimediaTracking = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-full">
        <h2 className="p-2 text-xl font-semibold"> Youtube video tracking</h2>
        <iframe
          className=" w-[90%] md:w-[60%] aspect-video"
          src="https://www.youtube.com/embed/dcXqhMqhZUo?si=GkpfWD8mQ-h7K7Fy"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="flex flex-col items-center w-full">
        <h2 className="py-4 text-xl font-semibold">Custom Video tracking</h2>
        <div className="w-[90%] md:w-[60%] aspect-video">
          <VideoPlayer
            // src={video}
            src={"https://www.w3schools.com/html/mov_bbb.mp4"}
            name="Big Buck Bunny"
          ></VideoPlayer>
        </div>
      </div>
    </div>
  );
};

export default MultimediaTracking;
