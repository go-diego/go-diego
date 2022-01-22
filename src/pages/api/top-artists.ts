import type {NextApiRequest, NextApiResponse} from "next";
import {getTopItems} from "lib/spotify";
import {Artist} from "types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Artist[]>
) {
  try {
    const response = await getTopItems({
      type: "artists"
    });
    const {items} = await response.json();

    const artists: Artist[] = items.map((artist: any) => ({
      name: artist.name,
      artistUrl: artist.external_urls.spotify,
      imageUrl: artist.images[0].url,
      genres: artist.genres
    }));

    return res.status(200).json(artists);
  } catch (e) {
    // @ts-ignore
    return res.status(500).json({error: e.message});
  }
}
