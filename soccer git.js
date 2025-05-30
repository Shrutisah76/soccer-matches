soccer-matches/
 public/
   index.html
 .env
 server.js
package.json
RAPIDAPI_KEY=your_rapidapi_key_here
// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static("public"));

app.get("/api/matches", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures?next=10",
      {
        headers: {
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
        }
      }
    );

    const matches = response.data.response.map(match => ({
      home: match.teams.home.name,
      away: match.teams.away.name,
      date: match.fixture.date
    }));

    res.json(matches);
  } catch (error) {
    console.error("API fetch failed:", error.message);
    res.status(500).json({ error: "Failed to fetch matches" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static("public"));

app.get("/api/matches", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures?next=10",
      {
        headers: {
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
        }
      }
    );

    const matches = response.data.response.map(match => ({
      home: match.teams.home.name,
      away: match.teams.away.name,
      date: match.fixture.date
    }));

    res.json(matches);
  } catch (error) {
    console.error("API fetch failed:", error.message);
    res.status(500).json({ error: "Failed to fetch matches" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Upcoming Soccer Matches</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; background: #f9f9f9; }
    h1 { color: #333; }
    ul { list-style: none; padding: 0; }
    li {
      background: #fff;
      margin: 10px 0;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }
  </style>
</head>
<body>
  <h1>Upcoming Soccer Matches</h1>
  <ul id="matches">Loading...</ul>

  <script>
    fetch("/api/matches")
      .then(res => res.json())
      .then(data => {
        const list = document.getElementById("matches");
        list.innerHTML = ""; // Clear "Loading..." message
        data.forEach(match => {
          const li = document.createElement("li");
          const date = new Date(match.date).toLocaleString();
          li.textContent = `${match.home} vs ${match.away} - ${date}`;
          list.appendChild(li);
        });
      })
      .catch(err => {
        document.getElementById("matches").innerHTML = "Error loading matches.";
        console.error("Error:", err);
      });
  </script>
</body>
</html>
# Create project directory and enter it
mkdir soccer-matches && cd soccer-matches

# Initialize and install required packages
npm init -y
npm install express axios dotenv cors

# Create public directory
mkdir public
# (Put index.html inside this public folder)

# Create .env and add your API key
# Create server.js with backend code

# Run the server
node server.js

