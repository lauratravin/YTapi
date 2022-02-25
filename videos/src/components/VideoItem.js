import { isRefObject } from "@fluentui/react-component-ref";
import React from "react";

const VideoItem = ({video}) => {

    console.log(video)
    const url = "https://www.youtube.com/embed/" + video.id.videoId;
   return <div key={video.id.videoId}> {video.snippet.title}
        
         <img src={video.snippet.thumbnails.medium.url}/>
        <iframe width="560" height="315"  
        src={url} ></iframe>
        </div> 
}

export default VideoItem;


{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/qvAtjkQlEuQ" 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}