import type {NextApiRequest, NextApiResponse} from "next";
import {getRecentlyPlayed} from "lib/spotify";
import {RecentlyPlayed} from "types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RecentlyPlayed[]>
) {
  try {
    const response = await getRecentlyPlayed();
    const {items} = await response.json();

    const tracks: RecentlyPlayed[] = items.map((track: any) => ({
      played_at: track.played_at,
      artist: track.track.artists.map((artist: any) => artist.name).join(", "),
      songUrl: track.track.external_urls.spotify,
      title: track.track.name,
      imageUrl: track.track.album.images[0].url
    }));

    return res.status(200).json(tracks);
  } catch (e) {
    // @ts-ignore
    return res.status(500).json({error: e.message});
  }
}
