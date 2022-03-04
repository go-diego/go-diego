import {createStyles, Theme, makeStyles} from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import Box from "@material-ui/core/Box";
import useSWR from "swr";
import {fetcher} from "lib/helpers";
import {Artist} from "types";
import {Typography} from "@material-ui/core";
import SpotifyIcon from "./SpotifyIcon";

export default function TopArtistsGrid() {
  const classes = useStyles();
  const {data, error} = useSWR<Artist[]>("/api/top-artists", fetcher, {
    revalidateOnFocus: false
  });
  const isLoading = !data && !error;

  return (
    <Box py={5}>
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        className={classes.sectionHeader}>
        <Box pr={1} display="flex" alignItems="center">
          <SpotifyIcon />
        </Box>
        Top Artists
      </Typography>
      <Box pt={3}>
        {isLoading && <Typography>Loading...</Typography>}
        {error && (
          <Typography>Something went wrong loading top artists 🤔</Typography>
        )}
        {!error && data && (
          <ImageList component="div" gap={2} className={classes.imageList}>
            {data.map((item, index) => (
              <ImageListItem
                key={item.artistUrl}
                cols={[0, 9].includes(index) ? 2 : 1}
                rows={[0, 9].includes(index) ? 2 : 1}
                component={({children, ...rest}) => (
                  <a
                    href={item.artistUrl}
                    aria-label={`${item.name} link`}
                    target="__blank"
                    {...rest}>
                    {children}
                  </a>
                )}>
                <img src={item.imageUrl} alt={item.name} />
                <ImageListItemBar
                  title={item.name}
                  position="bottom"
                  className={classes.titleBar}
                  classes={{
                    title: classes.title
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    imageList: {
      //   width: 500,
      //   height: 450,
      // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.
      //   transform: "translateZ(0)"
    },
    titleBar: {
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
        "rgba(0,0,0,0.3) 75%, rgba(0,0,0,0) 100%)"
    },
    title: {
      fontWeight: "bold"
    },
    sectionHeader: {
      display: "flex",
      alignItems: "center"
    }
  })
);
