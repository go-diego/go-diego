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

export interface NFT {
  tokenName: string;
  tokenID: string;
  tokenSymbol: string;
  contractAddress: string;
  name: string;
  image: string;
  description: string;
}