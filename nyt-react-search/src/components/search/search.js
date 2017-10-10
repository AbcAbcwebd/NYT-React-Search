import React, { Component } from "react";
import './search.css';

class Search extends Component {
  state = {
    topic: "technology",
    startYear: 1995,
    endYear: 2017
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
	console.log("Form submitted")
	console.log(this.state.topic);
	this.props.setActiveSearch({
		topic: this.state.topic,
    	startYear: this.state.startYear,
    	endYear: this.state.endYear
	});
//	this.context.history.push('/results')
	window.location = "/results?topic=" + this.state.topic + "&start_year=" + this.state.startYear + "&end_year=" + this.state.endYear;
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