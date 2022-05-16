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

export type TimeRange = "long_term" | "medium_term" | "short_term" | undefined;

export interface NFT {
  tokenName: string;
  tokenID: string;
  tokenSymbol: string;
  contractAddress: string;
  name?: string;
  image?: string;
  description?: string;
}

export interface Transaction {
  tokenName: string;
  tokenID: string;
  tokenSymbol: string;
  contractAddress: string;
  to: string;
  from: string;
}

export interface Collection {
  image?: string;
  name: string;
  description: string;
  address: string;
  assets: NFT[];
}
