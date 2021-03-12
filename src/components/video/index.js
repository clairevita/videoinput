import React, { useEffect, useRef } from "react";
import './video.css'
const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

  return (
    <div>
      <div id="container">
        <video ref={videoRef} />
      </div>
    </div>
  );
};

export default Video;