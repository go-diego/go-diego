import type {NextApiRequest, NextApiResponse} from "next";
import {getTopItems} from "lib/spotify";
import {Artist, TimeRange} from "types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Artist[]>
) {
  const time_range = req.query?.time_range as TimeRange;
  try {
    const response = await getTopItems({
      type: "artists",
      time_range
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
