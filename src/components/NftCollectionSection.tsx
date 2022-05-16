import {Typography, Box} from "@material-ui/core";
import useSWR from "swr";

import NftCollectionSectionHeader, {
  NftCollectionSectionHeaderSkeleton
} from "./NftCollectionSectionHeader";
import NftGridList, {NftGridListSkeleton} from "./NftGridList";
import {getAvatar, getWalletAddressFromENS} from "lib/ether";
import {fetcher} from "lib/helpers";
import {NFT} from "types";
import {sortBy} from "lodash";

const ENS = "diegoo.eth";

const NftCollectionSection = () => {
  const {data: avatarUrl} = useSWR([ENS, "get-avatar"], getAvatar);
  const {data: walletAddress} = useSWR(
    [ENS, "get-address"],
    getWalletAddressFromENS
  );
  const {data, error} = useSWR<NFT[]>(`/api/nfts?ens=${ENS}`, fetcher, {});

  const isDataLoaded = data && avatarUrl && walletAddress;

  const sortedData = data ? sortBy(data, "tokenSymbol") : [];

  /**
  * TODO: group by contract address
  * const nftsByContract = groupBy(transactions, "contractAddress");
  * get contract info with opensea api
  * 
  * let collectionPromises: any = [];
    Object.keys(nftsByContract).forEach((address) => {
      collectionPromises.push(getCollection(address));
    });
    const collections = await Promise.allSettled(collectionPromises);
  */

  return (
    <Box component="section" py={5}>
      <Typography variant="h5" component="h3" gutterBottom>
        NFT Gallery
      </Typography>
      <Box py={3}>
        {error && <Typography>Something went wrong loading NFTs 🤔</Typography>}
        {!error && !isDataLoaded && (
          <>
            <NftCollectionSectionHeaderSkeleton />
            <NftGridListSkeleton />
          </>
        )}
        {!error && isDataLoaded && (
          <>
            <NftCollectionSectionHeader
              ens={ENS}
              avatarUrl={avatarUrl}
              address={walletAddress}
            />
            <Box pt={1}>
              <NftGridList nfts={sortedData} />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default NftCollectionSection;
