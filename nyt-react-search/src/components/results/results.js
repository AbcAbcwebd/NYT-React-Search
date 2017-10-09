import React, { Component } from "react";
import './results.css';
//import newsScrape from '../../utils/newsScrape.js';
import axios from "axios";
import ArticleThumbnail from '../articleThumbnail';

class Results extends Component {
  state = {
    articles: [{headline: "No Articles Yet!"}]
  };

  //this.state.articles.map((d) => `<li key=${d}>${d}</li>` );
  // blug = "Test";

  checkState = () => {
    console.log(this.state.articles);
  }

//  this.checkState = this.checkState.bind(this);

  scrapeTimes = query => {
      axios.get('api/scrape')
      .then(function (response) {
        console.log(response);
        this.setState({
          articles: ["response.data"]
        }, this.checkState)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  componentDidMount() {
    this.scrapeTimes();
  }

  render() {
    return (
      <div id="results">
	      <p>Results</p>
        {
          this.state.articles.map(item => (
            <ArticleThumbnail
              headline={item.headline}
              byLine={item.byLine}
              summary={item.summary}
              link={item.link}
              key={item.headline}
            />
          ))
        }
        <button onClick={this.checkState}>Check State</button>
        <button onClick={this.scrapeTimes}>Update Scrape</button>
      </div>
    )
  };
};


export default Results;