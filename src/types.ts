export interface Track {
  artist: string;
  songUrl: string;
  title: string;
  imageUrl: string;
  album: string;
}

export interface Artist {
  name: string;
  artistUrl: string;
  imageUrl: string;
  genres: string[];
}

export interface RecentlyPlayed extends Track {
  played_at: string;
}
