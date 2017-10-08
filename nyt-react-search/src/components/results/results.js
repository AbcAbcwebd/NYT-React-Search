import React, { Component } from "react";
import './results.css';
//import newsScrape from '../../utils/newsScrape.js';
import axios from "axios";

class Results extends Component {
  state = {
    articles: {headline: "No Articles Yet!"}
  };

  //this.state.articles.map((d) => `<li key=${d}>${d}</li>` );
  // blug = "Test";

  scrapeTimes = query => {
      axios.get('api/scrape')
      .then(function (response) {
        console.log(response);
        this.setState({
          articles: response.data
        })
      })
      .catch(function (error) {
//        console.log(error);
      });
  };

  componentDidMount() {
    this.scrapeTimes();
  }

  render() {
    return (
      <div id="results">
	      <p>Results</p>
        <p>{this.state.articles.headline}</p>
      </div>
    )
  };
};


export default Results;