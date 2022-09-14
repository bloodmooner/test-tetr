import React, {useEffect} from 'react';
import './app-stream-cam.css';

const AppStreamCam = () => {

  const streamCamVideo = () => {
  const constraints = { audio: true, video: { width: 1280, height: 720 } };
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function(mediaStream) {
      const video = document.querySelector("video");
      
      video.srcObject = mediaStream;
      video.onloadedmetadata = function(e) {
        video.play();
      };

    })
    .catch(function(err) {
      console.log(err.name + ": " + err.message);
    }); 
  }

  useEffect(()=>{
    streamCamVideo()
  },[])

  return (
    <div>
        <video autoPlay={true} id="videoElement" ></video>      
    </div>
  );
}

export default AppStreamCam;