function to(promise) {
    return promise
        .then(data => {
            return [null, data];
        })
        .catch(err => [err]);
}

export default function Spotify() {
    async function refreshToken() {
        const url = process.env.SPOTIFY_REFRESH_TOKEN_URL;
        const [error, response] = await to(fetch(url));
        if (error) throw new Error(error);
        if (!response.ok) return Promise.reject(error);
        return response.json();
    }

    async function getTopPlayed({
        type = "artists",
        time_range = "short_term",
        limit = 10,
        token
    }) {
        if (!token) throw new Error("NO_TOKEN");
        const url = `https://api.spotify.com/v1/me/top/${type}?time_range=${time_range}&limit=${limit}`;
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        };
        const options = {
            headers
        };

        const [error, response] = await to(fetch(url, options));
        if (error) throw new Error(error);
        if (!response.ok) return Promise.reject(error);
        return response.json();
    }

    async function recentlyPlayed({token, limit}) {
        if (!token) throw new Error("NO_TOKEN");
        const url = `https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`;
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        };
        const options = {
            headers
        };

        const [error, response] = await to(fetch(url, options));
        if (error) throw new Error(error);
        if (!response.ok) return Promise.reject(error);
        return response.json();
    }

    return Object.freeze({
        refreshToken,
        getTopPlayed,
        recentlyPlayed
    });
}
