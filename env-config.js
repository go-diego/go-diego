const ENV_PATH =
  process.env.NODE_ENV === "production" ? "./.env" : "./.env.development";
require("dotenv").config({path: ENV_PATH});

module.exports = {
  "process.env.GITHUB_TOKEN": process.env.GITHUB_TOKEN,
  "process.env.SPOTIFY_AUTH": process.env.SPOTIFY_AUTH,
  "process.env.SPOTIFY_TOKEN": process.env.SPOTIFY_TOKEN,
  "process.env.SPOTIFY_REFRESH_TOKEN_URL":
    process.env.SPOTIFY_REFRESH_TOKEN_URL,
  "process.env.GA_ID": process.env.GA_ID
};
