import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl, autoPlay = false, loop = false }) => {
  return (
    <div className="video-player">
      <ReactPlayer 
        url={videoUrl}      // URL for the video (YouTube, Vimeo, etc.)
        playing={autoPlay}  // Whether to play the video automatically
        loop={loop}         // Whether to loop the video
        controls={true}     // Display player controls
        width="100%"        // Full width of the container
        height="300px"       // Full height of the container
      />
    </div>
  );
};

export default VideoPlayer;
