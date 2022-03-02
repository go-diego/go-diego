import {ethers} from "ethers";
import {NFT} from "types";
import ABI from "NFT_ABI.json";

const provider = ethers.getDefaultProvider("mainnet");

export const getAvatar = async (ens: string) => {
  const avatar = await provider.getAvatar(ens);
  return avatar;
};

const getTokenURI = async (address: string, tokenId: string) => {
  const contract = new ethers.Contract(address, ABI, provider);
  const dataUri = await contract.tokenURI(tokenId);

  let metadata: Pick<NFT, "image" | "description" | "name"> | null = null;
  if (dataUri.indexOf("data:application/json") > -1) {
    const base64 = atob(dataUri.slice(dataUri.indexOf(",") + 1));
    metadata = JSON.parse(base64);
    return metadata;
  }

  let requestUrl = dataUri;
  if (dataUri.indexOf("ipfs") > -1) {
    requestUrl = `https://ipfs.io/ipfs/${dataUri.slice(
      dataUri.indexOf("ipfs") + 5
    )}`;
  }

  const res = await fetch(requestUrl);
  const data = await res.json();
  metadata = {
    image: data.image,
    description: data.description,
    name: data.name
  };

  return metadata;
};

export const getWalletAddressFromENS = async (ens: string) => {
  return provider.resolveName(ens);
};

export const getNFTs = async (ens: string): Promise<NFT[]> => {
  const address = await getWalletAddressFromENS(ens);
  if (!address) throw Error("Could not resolve name");
  const url = `https://api.etherscan.io/api?module=account&action=tokennfttx&address=${address}&sort=asc&apikey=${process.env.ETHERSCAN_API_KEY}`;
  const response = await (await fetch(url)).json();
  const promises = response.result
    // @ts-ignore
    .filter((tx) => !["ENS"].includes(tx.tokenSymbol))
    .map(async (tx: any) => {
      const data = await getTokenURI(tx.contractAddress, tx.tokenID);
      return {
        ...data,
        tokenName: tx.tokenName,
        tokenID: tx.tokenID,
        tokenSymbol: tx.tokenSymbol,
        contractAddress: tx.contractAddress
      };
    });
  const nftList = await Promise.all(promises);
  return nftList;
};
