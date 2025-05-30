# Soccer Matches Viewer
This is a simple Node.js + Express + HTML project that displays a list of upcoming soccer matches using the [API-Football](https://rapidapi.com/api-sports/api/api-football/) API.
## Features
- Fetches and displays the next 10 upcoming soccer matches.
- Shows match details: home team, away team, and scheduled date/time.
- Simple and clean frontend.
- Backend uses Express.js and Axios to fetch data from the external API.
## Setup Instructions
### 1. Clone the Repository
```bash
git clone https://github.com/your-username/soccer-matches.git
cd soccer-matches
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Add Your API Key
Create a `.env` file in the root directory and add your RapidAPI key:
```env
RAPIDAPI_KEY=your_rapidapi_key_here
```
You can get your key from [RapidAPI - API-Football](https://rapidapi.com/api-sports/api/api-football/).
### 4. Run the Server
```bash
node server.js
```
Visit `http://localhost:3000` in your browser to see the list of matches.
## Project Structure
```
soccer-matches/
├── public/
│   └── index.html        # Frontend HTML page
├── .env                  # Environment variables (API Key)
├── server.js             # Express server fetching and serving match data
├── package.json          # Node dependencies
└── README.md             # Project documentation
```
