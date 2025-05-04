import React from "react";

export const VideoPlayer = ({videoSrc}) => {
  return (
    <div>
      <video className="rounded-[12px]"  controls>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};
