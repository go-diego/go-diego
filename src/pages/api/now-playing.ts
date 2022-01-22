import type {NextApiRequest, NextApiResponse} from "next";
import {getNowPlaying} from "lib/spotify";
import {Track} from "types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Track>
) {
  try {
    const response = await (await getNowPlaying()).json();

    const track = {
      title: response.item.name,
      artist: response.item.artists
        .map((artist: any) => artist.name)
        .join(", "),
      album: response.item.album.name,
      imageUrl: response.item.album.images[0].url,
      songUrl: response.item.external_urls.spotify
    };

    return res.status(200).json(track);
  } catch (e) {
    // @ts-ignore
    return res.status(500).json({error: e.message});
  }
}
