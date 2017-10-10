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

      console.log(this.props.activeSearch)

    // Built by LucyBot. www.lucybot.com
/*    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "3baa8cba285e47bbb0176e1e7702df66",
      'q': "SEARCH TERM",
      'begin_date': "19950112",
      'end_date': "20171010"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
    }).fail(function(err) {
      throw err;
    });*/
  };

  componentDidMount() {
    this.scrapeTimes();
  }

  render() {
    return (
      <div id="results">
	      <h2>Results</h2>
        {
          this.state.articles.map(item => (
            <ArticleThumbnail
              headline={item.headline}
              byLine={item.byLine}
              summary={item.summary}
              link={item.link}
              key={item.headline + Math.floor(Math.random() * 1000)}
            />
          ))
        }
      </div>
    )
  };
};


export default Results;