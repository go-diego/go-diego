import {
  Typography,
  Box,
  ImageList,
  ImageListItem,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import useSWR from "swr";
import {getAvatar, getNFTs, getWalletAddressFromENS} from "lib/ether";
import NftCollectionSectionHeader from "./NftCollectionSectionHeader";
import {fetcher} from "lib/helpers";
import {NFT} from "types";

const ENS = "diegoo.eth";

const NftCollectionSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const {data: avatarUrl} = useSWR([ENS, "get-avatar"], getAvatar);
  const {data: walletAddress} = useSWR(
    [ENS, "get-address"],
    getWalletAddressFromENS
  );
  const {data, error} = useSWR<NFT[]>(`/api/nfts?ens=${ENS}`, fetcher);

  const isDataLoaded = data && avatarUrl && walletAddress;

  return (
    <Box component="section" py={5}>
      <Typography variant="h5" component="h3" gutterBottom>
        NFT Collection
      </Typography>
      <Box py={3}>
        {error && <Typography>Something went wrong loading NFTs 🤔</Typography>}
        {!error && !isDataLoaded && <Typography>Loading...</Typography>}
        {!error && isDataLoaded && (
          <>
            <NftCollectionSectionHeader
              ens={ENS}
              avatarUrl={avatarUrl}
              address={walletAddress}
            />
            <Box pt={1}>
              <ImageList cols={isSmallScreen ? 2 : 3} component="div" gap={2}>
                {data &&
                  data.map((item) => (
                    <ImageListItem key={item.tokenID}>
                      <img src={item.image} alt={item.name} />
                      {/* <ImageListItemBar
                  title={item.name}
                  position="bottom"
                  className={classes.titleBar}
                  classes={{
                    title: classes.title
                  }}
                /> */}
                    </ImageListItem>
                  ))}
              </ImageList>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default NftCollectionSection;
