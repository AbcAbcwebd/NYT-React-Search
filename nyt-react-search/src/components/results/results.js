import React, { Component } from "react";
import './results.css';
//import newsScrape from '../../utils/newsScrape.js';
import axios from "axios";
import ArticleThumbnail from '../articleThumbnail';

class Results extends Component {
  state = {
    articles: [{headline: "No Articles Yet!"}]
  };

  checkState = () => {
    console.log(this.state.articles);
  }

  scrapeTimes = () => {
/*      const parentObj = this;
      axios.get('api/scrape')
      .then(function (response) {
        console.log(response);
        console.log(this)
        parentObj.setState({
          articles: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });*/

      console.log(this.props.location)
      const queryURL = this.props.location.search;
      const topic = queryURL.split("topic=")[1].split("&start")[0];
      const startYear = queryURL.split("start_year=")[1].split("&end")[0];
      const endYear = queryURL.split("end_year=")[1];

      console.log("Topic: " + topic);
      console.log("Start year: " + startYear);
      console.log("End year: " + endYear);
/*
    // Built by LucyBot. www.lucybot.com
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "3baa8cba285e47bbb0176e1e7702df66",
      'q': topic,
      'begin_date': startYear + "0101",
      'end_date': endYear + "1010"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
    }).fail(function(err) {
      throw err;
    });
*/
    const queryString = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3baa8cba285e47bbb0176e1e7702df66&q=${topic}&begin_date=${startYear}0101&end_date=${endYear}1231`
    const parentObj = this;

    axios.get(queryString)
      .then(function (response) {
        console.log(response.data.response.docs);
        parentObj.setState({
          articles: response.data.response.docs
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  componentWillMount() {
    this.scrapeTimes();
  }

  render() {
    return (
      <div id="results">
	      <h2>Results</h2>
        {
          this.state.articles.map(item => (
            <ArticleThumbnail
              headline={item.headline.main}
              byLine={item.byline.original}
              summary={item.snippet}
              link={item.web_url}
              key={item.headline + Math.floor(Math.random() * 1000)}
            />
          ))
        }
      </div>
    )
  };
};


export default Results;