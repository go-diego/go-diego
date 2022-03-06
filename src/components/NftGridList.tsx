import {
  Typography,
  Box,
  ImageList,
  ImageListItem,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import {Skeleton} from "@material-ui/lab";

import {NFT} from "types";

interface NftGridListProps {
  nfts: NFT[];
}

const NftGridList = ({nfts}: NftGridListProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
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
            <img
              loading="lazy"
              src={item.image}
              alt={`${item.tokenName} ${item.tokenID}`}
            />
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
