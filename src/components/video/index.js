import React, { useEffect, useRef, useState } from "react";
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
    function handleClick(e) {
        e.preventDefault();
    }
    return (
        <div>
            <div id="container">
                <video ref={videoRef} />
                <button onClick={handleClick}>
                    Toggle Camera
      </button>
            </div>
        </div>
    );
};

export default Video;