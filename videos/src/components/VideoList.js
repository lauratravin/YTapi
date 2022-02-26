import React from "react";
import VideoItem from "./VideoItem";


// const VideoList = (props) => { //destructuring below
const VideoList = ({ videos , onVideoSelect}) => {
           
          const renderedList =  videos.map( v => 
               {return  <VideoItem onVideoSelect={onVideoSelect} video={ v }/>}
                    )   
          
  return <div>{renderedList}</div>
};

export default VideoList;