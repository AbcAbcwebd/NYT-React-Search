import React, { Component } from "react";
import './results.css';
import newsScrape from '../../utils/newsScrape.js';

class Results extends Component {
  state = {

  };

   componentDidMount() {
//    this.searchMovies("The Matrix");
//	console.log(this.props.activeSearch);
//	console.log("Component mounted")
	newsScrape.newsScrape();
//  }

//   scrapeTimes = query => {
     
   };

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