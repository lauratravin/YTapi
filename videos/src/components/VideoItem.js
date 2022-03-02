import { isRefObject } from "@fluentui/react-component-ref";
import React from "react";
import './App.css'

const VideoItem = ({video,onVideoSelect}) => {

    // console.log(video)
    const url = "https://www.youtube.com/embed/" + video.id.videoId; // `https://www.youtube.com/embed/${video.id.videoId}`

          
    return    <div onClick={() => onVideoSelect(video)} className="item video-item">
                                
                                        
                                        {/* <div className="embed">
                                        
                                                <iframe   src={url} ></iframe>
                                        </div> */}

                                        <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
                                        <div className="content">
                                            <h2 className="header">{video.snippet.title}</h2>
                                            <p className="description">{video.snippet.description}</p>
                                        </div>
                            </div>      
                            {/* <div style={{ borderTop: "1px solid #000 ", marginLeft: 10, marginRight:10 }}></div>                */}
                   
          
}

export default VideoItem;


