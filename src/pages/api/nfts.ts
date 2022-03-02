import type {NextApiRequest, NextApiResponse} from "next";

import {NFT} from "types";
import {getNFTs} from "lib/ether";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NFT[]>
) {
  const {
    query: {ens}
  } = req;

  // @ts-ignore
  if (!ens) return res.status(400).json({error: "Missing address"});

  try {
    const nfts = await getNFTs(ens as string);
    return res.status(200).json(nfts);
  } catch (e) {
    // @ts-ignore
    return res.status(500).json({error: e.message});
  }
}
