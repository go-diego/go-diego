import {
  Typography,
  Box,
  ImageList,
  ImageListItem,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import Image from "next/image";
import {Skeleton} from "@material-ui/lab";

import {NFT} from "types";
import {blurPlaceHolderDataUrl} from "../constants";

export const nftImageSrc = ["ipfs.io", "gateway.pinata.cloud", "base64"];

interface NftGridListProps {
  nfts: NFT[];
}

const NftGridList = ({nfts}: NftGridListProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const shouldOptimize = (src: string) =>
    nftImageSrc.some((s) => src.includes(s));
  return (
    <ImageList cols={isSmallScreen ? 2 : 3} component="div" gap={2}>
      {nfts.map((item) => (
        <ImageListItem component="div" key={item.tokenID}>
          {!item.image && (
            <Box
              p={1}
              display="flex"
              justifyContent="center"
              border="1px solid #ccc"
              height="100%">
              <Typography variant="caption">
                {`Could not load image for ${item.tokenName} ${item.tokenID} for some reason 🤔. Try refreshing the page.`}
              </Typography>
            </Box>
          )}
          {item.image && (
            <>
              {!shouldOptimize(item.image) ? (
                <img
                  loading="lazy"
                  src={item.image}
                  alt={`${item.tokenName} ${item.tokenID}`}
                />
              ) : (
                <Image
                  src={item.image}
                  alt={`${item.tokenName} ${item.tokenID}`}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={blurPlaceHolderDataUrl}
                />
              )}
            </>
          )}
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
  );
};

export const NftGridListSkeleton = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <ImageList cols={isSmallScreen ? 2 : 3} component="div" gap={2}>
      {Array.from(Array(9)).map((_, i) => (
        <ImageListItem component="div" key={`nft-grid-skeleton-${i}`}>
          <Skeleton variant="rect" height="100%" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default NftGridList;
