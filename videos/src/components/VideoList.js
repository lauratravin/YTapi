import React from "react";
import VideoItem from "./VideoItem";


// const VideoList = (props) => { //destructuring below
const VideoList = ({ videos}) => {
           
          const renderedList =  videos.map( v => 
               {return  <VideoItem video={ v }/>}
                    )   
          
  return <div>{renderedList}</div>
};

export default VideoList;