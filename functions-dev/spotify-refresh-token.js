const fetch = require("node-fetch").default;
//const fetch = require("isomorphic-unfetch");

function to(promise) {
    return promise
        .then(data => {
            return [null, data];
        })
        .catch(err => [err]);
}

export async function handler(event, context) {
    const url = "https://accounts.spotify.com/api/token";
    const headers = {
        Authorization: `Basic ${process.env.SPOTIFY_AUTH}`,
        "Content-Type": "application/x-www-form-urlencoded"
    };
    const grant_type = "refresh_token";
    const bodyData = {
        grant_type,
        refresh_token: process.env.SPOTIFY_TOKEN
    };
    const body = Object.keys(bodyData)
        .map(key => {
            return (
                encodeURIComponent(key) +
                "=" +
                encodeURIComponent(bodyData[key])
            );
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
}
