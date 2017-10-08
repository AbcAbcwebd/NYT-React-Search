import React, { Component } from "react";
import './results.css';
//import newsScrape from '../../utils/newsScrape.js';
import axios from "axios";

class Results extends Component {
  state = {
    articles: {headline: "No Articles Yet!"}
  };

  let formatedArticles = this.state.articles.map((d) => `<li key=${d}>${d}</li>` );

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
//    this.searchMovies("The Matrix");
//  console.log(this.props.activeSearch);
//  console.log("Component mounted")
//  let scrapeInfo = newsScrape.newsScrape();
//  console.log(scrapeInfo)
    this.scrapeTimes();
  }

  render() {
    return (
      <div id="results">
	      <p>Results</p>
        <ul>
	      {formatedArticles }
        </ul>
        })}
      </div>
    )
  };
};


export default Results;