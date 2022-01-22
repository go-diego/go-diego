import type {NextApiRequest, NextApiResponse} from "next";
import {getTopItems} from "lib/spotify";
import {Track} from "types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Track[]>
) {
  try {
    const response = await getTopItems({
      type: "tracks"
    });
    const {items} = await response.json();

    const tracks = items.map((track: any) => ({
      artist: track.artists.map((artist: any) => artist.name).join(", "),
      songUrl: track.external_urls.spotify,
      title: track.name,
      imageUrl: track.album.images[0].url
    }));

    return res.status(200).json(tracks);
  } catch (e) {
    // @ts-ignore
    return res.status(500).json({error: e.message});
  }
}
