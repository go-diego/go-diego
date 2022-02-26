import {makeStyles, createStyles} from "@material-ui/core/styles";
import {
  Typography,
  Box,
  ImageList,
  ImageListItem,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import useSWR from "swr";
import {getAvatar, getNFTs} from "lib/ether";

const ENS = "diegoo.eth";

const NftCollectionSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  const {data: avatarUrl} = useSWR([ENS, "get-avatar"], getAvatar);
  const {data, error} = useSWR([ENS, "get-nfts"], getNFTs);
  const isLoading = !data && !error;

  return (
    <Box component="section" py={5}>
      <Typography variant="h5" component="h3" gutterBottom>
        NFT Collection
      </Typography>
      <Box py={3}>
        {error && <Typography>Something went wrong loading NFTs 🤔</Typography>}
        {isLoading && <Typography>Loading...</Typography>}
        {!isLoading && (
          <>
            <Typography
              gutterBottom
              component="div"
              color="textSecondary"
              className={classes.sectionHeader}>
              <Box pr={1} display="flex" alignItems="center">
                {avatarUrl && (
                  <img
                    src={avatarUrl}
                    width={24}
                    height={24}
                    className={classes.avatar}
                  />
                )}
              </Box>
              {ENS}
            </Typography>
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

const useStyles = makeStyles(() =>
  createStyles({
    avatar: {
      borderRadius: "50%"
    },
    sectionHeader: {
      display: "flex",
      alignItems: "center"
    }
  })
);

export default NftCollectionSection;
