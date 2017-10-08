import React, { Component } from "react";
import './results.css';

class Results extends Component {
  state = {

  };

   componentDidMount() {
//    this.searchMovies("The Matrix");
	console.log(this.props.activeSearch);
  }
/*
   searchMovies = query => {
     API.search(query)
       .then(res => this.setState({ result: res.data }))
       .catch(err => console.log(err));
   };
*/
  render() {
    return (
      // JSX Here
      <div id="results">
	      <p>Results</p>
	      <p>{this.props.activeSearch.topic}</p>
      </div>
    );
  }
}


export default Results;