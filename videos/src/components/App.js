import React from "react";
import SearchBar from "./SearchBar";
import './App.css'
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component {

  state = {videos: [],
           selectedVideo: null}


  onTermSubmit = async term => { //this is concatenate with youtube params
   const response = await  youtube.get('/search',  { params: { q: term} }  );
//  console.log(response) 
   this.setState({videos: response.data.items})
  //
  }

  onVideoSelect = videoIdselected => {
    console.log(videoIdselected)
    this.setState( {selectedVideo: videoIdselected })
  }

  render(){

    return(
       <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          I have {this.state.videos.length} videos.
          <VideoDetail video = { this.state.selectedVideo }  />
          <VideoList onVideoSelect={this.onVideoSelect}  videos={this.state.videos} />
         
       </div>
    )
  }

}
export default App;