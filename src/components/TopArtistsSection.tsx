import {createStyles, makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import useSWR from "swr";

import {fetcher} from "lib/helpers";
import {Artist} from "types";
import {Typography} from "@material-ui/core";
import SpotifyIcon from "./SpotifyIcon";
import TopArtistsGridList from "./TopArtistsGridList";

export default function TopArtistsSection() {
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
        {!error && data && <TopArtistsGridList artists={data} />}
      </Box>
    </Box>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    sectionHeader: {
      display: "flex",
      alignItems: "center"
    }
  })
);
