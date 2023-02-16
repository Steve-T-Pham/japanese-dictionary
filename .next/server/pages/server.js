const express = require("express");
const app = express();
const cors = require("cors");
const request = require("request");

// Configure CORS to allow requests from the React app
app.use(cors({
  origin: "http://localhost:3000",
}));

// Define the API route that will handle search requests
app.get("/search", (req, res) => {
  const searchQuery = req.query.q;
  const encodedSearchQuery = encodeURIComponent(searchQuery);

  // Make a request to the Jisho API using the search query
  request(`https://jisho.org/api/v1/search/words?keyword="${encodedSearchQuery}"`, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      // If the request is successful, return the response from the Jisho API
      res.json(JSON.parse(body));
    } else {
      // If there is an error, return an error message
      res.json({ error: "Failed to search Jisho API" });
    }
  });
});

// Start the server on port 5000
app.listen(5000, () => console.log("Server is listening on 5000"));