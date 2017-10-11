import React, { Component } from "react";
import './saved-articles.css';
import axios from "axios";
import SavedThumbnail from '../savedThumbnail';

class SavedArticles extends Component {
  state = {
    articles: [
      {
        headline: "No Articles Yet!", 
        byLine: "Please search for something.",
        summary: "Or wait for the page to load",
        link: "/"
      }
    ]
  };

  retrieveArticles = () => {
    const parentObj = this;
    axios.get('/api/articles')
      .then(function (response) {
        console.log(response.data);
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
	      <h2>Saved Articles</h2>
        {
          this.state.articles.map(item => (
            <SavedThumbnail
              headline={item.headline}
              byLine={item.byLine}
              summary={item.summary}
              link={item.link}
              key={item._id + "#" + Math.floor(Math.random() * 1000)}
              id={item._id}
            />
          ))
        }
      </div>
    )
  };
};


export default SavedArticles;