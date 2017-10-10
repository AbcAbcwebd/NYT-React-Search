import React, { Component } from "react";
import './saved-articles.css';

class SavedArticles extends Component {
  state = {

  };

  findArticles = () => {
    return fetch(`/api/articles`, {
      accept: 'application/json',
    }).then(res => console.log(res))
  }

  componentWillMount() {
    this.findArticles();
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