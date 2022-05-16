import type {NextApiRequest, NextApiResponse} from "next";

import {NFT} from "types";
import {getNFTs} from "lib/ether";

enum ExcludedContracts {
  ENS = "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
  Nametag = "0xc53dc593b69c67a209cf70d4172078c9125449bb",
  Colors = "0xcf12413f738ad3a14b9810ba5f86e59fcd9baadf",
  Lootlang = "0x9ccfe523e588d7a80366e871666a228ef999a414",
  ThreeLandersMfers = "0x85e57ae41f5d84ebb4b2bd1f63bd24c54c6d0cfe"
}

const contractsToExclude = [
  ExcludedContracts.Colors,
  ExcludedContracts.Lootlang,
  ExcludedContracts.Nametag,
  ExcludedContracts.ENS,
  ExcludedContracts.ThreeLandersMfers
];

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
    const nfts = await getNFTs(ens as string, contractsToExclude);
    return res.status(200).json(nfts);
  } catch (e) {
    // @ts-ignore
    return res.status(500).json({error: e.message});
  }
}
