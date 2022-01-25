const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_ITEMS_ENDPOINT = `https://api.spotify.com/v1/me/top`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;

type TopOptions = {
  type: "artists" | "tracks";
  limit?: number;
  time_range?: "long_term" | "medium_term" | "short_term";
};

const getAccessToken = async () => {
  const headers = {
    Authorization: `Basic ${process.env.SPOTIFY_AUTH}`,
    "Content-Type": "application/x-www-form-urlencoded"
  };
  const grant_type: string = "refresh_token";
  const refresh_token = process.env.SPOTIFY_TOKEN as string;
  const body = new URLSearchParams({grant_type, refresh_token});

  const options = {
    method: "POST",
    headers,
    body
  };

  const response = await (await fetch(TOKEN_ENDPOINT, options)).json();
  return response;
};

export const getTopItems = async ({
  type,
  limit = 10,
  time_range = "long_term"
}: TopOptions) => {
  const {access_token} = await getAccessToken();
  const options = {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  };

  const url = new URL(`${TOP_ITEMS_ENDPOINT}/${type}`);
  Object.entries({limit, time_range}).forEach(([key, value]) => {
    if (value) url.searchParams.append(key, value as string);
  });

  return fetch(url.toString(), options);
};

export const getNowPlaying = async () => {
  const {access_token} = await getAccessToken();
  const options = {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  };
  return fetch(NOW_PLAYING_ENDPOINT, options);
};

export const getRecentlyPlayed = async (params?: Pick<TopOptions, "limit">) => {
  const {access_token} = await getAccessToken();
  const options = {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  };
  const url = new URL(RECENTLY_PLAYED_ENDPOINT);
  url.searchParams.append("limit", (params?.limit || 20).toString());
  return fetch(url.toString(), options);
};
