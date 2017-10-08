/*
const request = require("request");
const cheerio = require("cheerio");

const newsScrape = () => {
	let allArticles = [];

  // First, we grab the body of the html with request
  request("https://www.nytimes.com/section/technology?action=click&pgtype=Homepage&region=TopBar&module=HPMiniNav&contentCollection=Tech&WT.nav=page", function(error, response, html) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(html);
    console.log("HTML loaded");
    $(".story-link").each(function(i, element) {

      // Save an empty result object
      var result = {};

      // Add the text and href of every link, and save them as properties of the result object
      result.headline = $(this).children(".story-meta").children(".headline").text().split("                    ")[1];
      result.link = $(this).attr("href");
      result.summary = $(this).children(".story-meta").children(".summary").text();
      result.byLine = $(this).children(".story-meta").children(".byline").text();

      console.log(result);

    })
    	.done( console.log(allArticles) );
  });

}
*/ 

//import axios from "axios";
//const BASEURL = "/scrape";

//export default {
  newsScrape: function(query) {
/*    console.log("About to get scrape info")
    console.log( axios.get(BASEURL) );
    return axios.get(BASEURL); */
    let data;
    axios.get('api/scrape')
      .then(function (response) {
//        console.log(response);
        data = "Doug";
      })
      .catch(function (error) {
        console.log(error);
      });
      return data;
  }
//};

// export default newsScrape;