import React, { Component } from "react";
import './results.css';
import axios from "axios";
import ArticleThumbnail from '../articleThumbnail';

class Results extends Component {
  state = {
    articles: [
      {
        headline: 
          {main: "No Articles Yet!"}, 
        byline: 
          {original: "Please search for something."},
        snippet: "Or wait for the page to load",
        web_url: "/"
      }
    ]
  };

  checkState = () => {
    console.log(this.state.articles);
  }

  scrapeTimes = () => {
      console.log(this.props.location)
      const queryURL = this.props.location.search;
      const topic = queryURL.split("topic=")[1].split("&start")[0];
      const startYear = queryURL.split("start_year=")[1].split("&end")[0];
      const endYear = queryURL.split("end_year=")[1];

      console.log("Topic: " + topic);
      console.log("Start year: " + startYear);
      console.log("End year: " + endYear);

    const queryString = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3baa8cba285e47bbb0176e1e7702df66&q=${topic}&begin_date=${startYear}0101&end_date=${endYear}1231`
    const parentObj = this;

    axios.get(queryString)
      .then(function (response) {
        console.log(response.data.response.docs);

        // To add unique identifyer 
        // 4 random digits are tacked on end in case an article is retrieved more than once.
        for (let i = 0; i < response.data.response.docs.length; i++){
          response.data.response.docs[i].id = response.data.response.docs[i]._id + "%" + Math.floor(Math.random() * 1000);
//          console.log(response.data.response.docs[i].id);
        };
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

  findArticle = (matchID) => {
    for (let x = 0; x < this.state.articles.length; x++){
      if (this.state.articles[x].id === matchID){
        return this.state.articles[x];
      }
    };
  }

  saveArticle = (event) => {
    console.log("Save function executed");
    const clickedArticleID = event.currentTarget.getAttribute('data-article-id');
    console.log(clickedArticleID);
    const clickedArticle = this.findArticle(clickedArticleID);
    console.log(clickedArticle);

    axios.post('api/articles', clickedArticle)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
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
              key={item.id + "#" + Math.floor(Math.random() * 1000)}
              saveArticle={this.saveArticle}
              id={item.id}
            />
          ))
        }
      </div>
    )
  };
};


export default Results;