import React from "react";
import SearchBar from "./SearchBar";
import './App.css'
import youtube from "../apis/youtube";
import VideoList from "./VideoList";


class App extends React.Component {

  state = {videos: []}

  onTermSubmit = async term => { //this is concatenate with youtube params
   const response = await  youtube.get('/search',  { params: { q: term} }  );
   console.log(response) 
   this.setState({videos: response.data.items})
   console.log(this.state.videos)
  }



  render(){

    return(
       <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          I have {this.state.videos.length} videos.
          <VideoList videos={this.state.videos} />
       </div>
    )
  }

}
export default App;