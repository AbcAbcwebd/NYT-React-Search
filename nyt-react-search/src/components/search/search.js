import React, { Component } from "react";
import './search.css';

class OmdbContainer extends Component {
  state = {
    result: {},
    search: ""
  };
/*
   componentDidMount() {
    this.searchMovies("The Matrix");
  }

   searchMovies = query => {
     API.search(query)
       .then(res => this.setState({ result: res.data }))
       .catch(err => console.log(err));
   };


  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };
*/
  render() {
    return (
      // JSX Here
    );
  }
}


export default Search;