import React from "react";




class SearchBar extends React.Component{

    state= {
        term: ''
    }
    
    onInputChange = (e) => {
        this.setState({term: e.target.value})
    };
    onFormSubmit = (e) => {
        
        //to add callback parent component
        e.preventDefault();
    }

     render(){
         return (
         <div className="ui segment">
             <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Videos Search</label>
                        <input type="text" 
                        value={this.state.term} 
                        onChange={ this.onInputChange}/>
                    </div>
             </form>
         </div>
         )
     }


}
export default SearchBar;