import {ethers} from "ethers";
import keyBy from "lodash/keyBy";

import {NFT} from "types";
import ABI from "NFT_ABI.json";
import {Exception} from "./helpers";
import {getNFTTransactionsByAddress} from "./etherscan";
import {groupBy} from "lodash";
import {getCollection} from "./opensea";

const provider = ethers.getDefaultProvider("mainnet");

export const getAvatar = async (ens: string) => {
  const avatar = await provider.getAvatar(ens);
  return avatar;
};

const getIpfsUrl = (rawUrl: string) => {
  return `https://ipfs.io/ipfs/${rawUrl.slice(rawUrl.indexOf("ipfs://") + 5)}`;
};

const getTokenURI = async (address: string, tokenId: string) => {
  const contract = new ethers.Contract(address, ABI, provider);
  let metadata: Pick<NFT, "image" | "description" | "name"> | null = null;

  try {
    const dataUri = await contract.tokenURI(tokenId);

    if (dataUri.indexOf("data:application/json") > -1) {
      const base64 = dataUri.slice(dataUri.indexOf(",") + 1);
      const buff = Buffer.from(base64, "base64");
      metadata = JSON.parse(buff.toString());
      return metadata;
    }

    const requestUrl =
      dataUri.indexOf("ipfs://") > -1 ? getIpfsUrl(dataUri) : dataUri;
    const res = await fetch(requestUrl);
    const data = await res.json();
    // console.log("data", data);

    metadata = {
      image:
        data.image.indexOf("ipfs://") > -1
          ? getIpfsUrl(data.image)
          : data.image,
      description: data.description,
      name: data.name
    };
  } catch (e) {
    // @ts-ignore
    throw Exception(e.message, {
      tokenId,
      address
    });
  }

  return metadata;
};

export const getWalletAddressFromENS = async (ens: string) => {
  return provider.resolveName(ens);
};

export const getNFTs = async (
  ens: string,
  excludeByContract?: string[]
): Promise<NFT[]> => {
  const address = await getWalletAddressFromENS(ens);

  if (!address) throw Error("Could not resolve name");
  const transactions = await getNFTTransactionsByAddress(address);
  // console.log("transactions", transactions);

  if (!transactions) throw Exception("Could not get NFTs");

  const nftsThatWereTransferredOut = transactions
    .filter((tx) => tx.to.toLowerCase() !== address.toLowerCase())
    .map((tx) => tx.tokenID);

  const promises = transactions
    .filter(
      /**
       * Remove transactions of nfts that were transferred out. Only want current nfts.
       */
      (tx) =>
        !nftsThatWereTransferredOut.includes(tx.tokenID) &&
        !excludeByContract?.includes(tx.contractAddress.toLocaleLowerCase())
    )
    .map(async (tx) => {
      const partialData = {
        tokenName: tx.tokenName,
        tokenID: tx.tokenID,
        tokenSymbol: tx.tokenSymbol,
        contractAddress: tx.contractAddress
      };

      const data = await getTokenURI(tx.contractAddress, tx.tokenID).catch(
        () => {
          return partialData;
        }
      );

      return {
        ...data,
        ...partialData
      };
    });
  const nftList = await Promise.all(promises);
  return nftList;
};
