const fetch = require("node-fetch").default;
const to = require("await-to-js").default;
const {SPOTIFY_AUTH, SPOTIFY_TOKEN} = process.env;

exports.handler = async (event, context) => {
  const url = "https://accounts.spotify.com/api/token";
  const headers = {
    Authorization: `Basic ${SPOTIFY_AUTH}`,
    "Content-Type": "application/x-www-form-urlencoded"
  };
  const grant_type = "refresh_token";
  const bodyData = {
    grant_type,
    refresh_token: SPOTIFY_TOKEN
  };
  const body = Object.keys(bodyData)
    .map(key => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(bodyData[key]);
    })
    .join("&");

  const options = {
    method: "POST",
    headers,
    body
  };

  const [error, response] = await to(fetch(url, options));
  if (error)
    return {
      statusCode: 500,
      body: JSON.stringify({message: error.message})
    };
  if (!response.ok)
    return {statusCode: response.status, body: response.statusText};

  const data = await response.json();

  return {
    statusCode: response.status,
    body: JSON.stringify({data})
  };
};
