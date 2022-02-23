import React from "react";
import SearchBar from "./SearchBar";
import './App.css'
import youtube from "../apis/youtube";




class App extends React.Component {

  onTermSubmit = async term => { //this is concatenate with youtube params
   const response = await  youtube.get('/search',  { params: { q: term} }  );
   console.log(response) 
  
  }



  render(){

    return(
       <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
       </div>
    )
  }

}
export default App;