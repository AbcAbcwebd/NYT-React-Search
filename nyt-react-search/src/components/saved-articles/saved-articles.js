import React, { Component } from "react";
import './saved-articles.css';
import axios from "axios";

class SavedArticles extends Component {
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

  retrieveArticles = () => {
    const parentObj = this;
    axios.get('/api/articles')
      .then(function (response) {
        console.log(response);
        parentObj.setState({
          articles: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentWillMount() {
    this.retrieveArticles();
  }

  render() {
    return (
      <div id="results">
	      <p>Saved Articles Display</p>
      </div>
    )
  };
};


export default SavedArticles;