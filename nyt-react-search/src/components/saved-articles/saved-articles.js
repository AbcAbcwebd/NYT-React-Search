import React, { Component } from "react";
import './saved-articles.css';
import axios from "axios";

class SavedArticles extends Component {
  state = {

  };

  findArticles = () => {
    console.log("Find articles function running")
    return fetch(`/api/articles`, {
      accept: 'application/json',
    }).then(res => console.log(res))
  }

  retrieveArticles = () => {
    axios.get('/api/articles')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentWillMount() {
    this.findArticles();
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