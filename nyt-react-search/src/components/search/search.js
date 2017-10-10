import React, { Component } from "react";
import './search.css';

class Search extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: ""
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
	console.log("Form submitted");
	console.log(this.state.topic);
/*	this.props.setActiveSearch({
		topic: this.state.topic,
    	startYear: this.state.startYear,
    	endYear: this.state.endYear
	});*/

	// To ensure blank feilds don't break API call.
	let searchTopic = this.state.topic;
	let searchStartYear = this.state.startYear;
	let searchEndYear = this.state.endYear;
	if (!searchStartYear){
		searchStartYear = 1900;
	};
	if (!searchEndYear){
		searchEndYear = new Date().getFullYear();
	};
	if (!searchTopic){
		searchTopic = "technology";
	};
	window.location = "/results?topic=" + searchTopic + "&start_year=" + searchStartYear + "&end_year=" + searchEndYear;
  };

  render() {
    return (
      // JSX Here
      <div id="search">
	      <h2>Search</h2>
	      <p>Topic</p>
	      <input
	        onChange={this.handleInputChange}
	        value={this.state.topic}
	        name="topic"
	        type="text"
	        className="form-control"
	        id="topic"
	      />
	      <p>Start Year</p>
	      <input
	        onChange={this.handleInputChange}
	        value={this.state.startYear}
	        name="startYear"
	        type="text"
	        className="form-control"
	        id="startYear"
	      />
	      <p>End Year</p>
	      <input
	        onChange={this.handleInputChange}
	        value={this.state.endYear}
	        name="endYear"
	        type="text"
	        className="form-control"
	        id="endYear"
	      />
	      <button onClick={this.handleFormSubmit} className="btn btn-primary">
	        Search
	      </button>
      </div>
    );
  }
}


export default Search;