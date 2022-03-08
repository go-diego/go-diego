import {Typography, makeStyles, createStyles, Box} from "@material-ui/core";
import useSWR from "swr";

import {fetcher} from "lib/helpers";
import {RecentlyPlayed} from "types";
import SpotifyIcon from "./SpotifyIcon";
import RecentlyPlayedTracksList from "./RecentlyPlayedTracksList";
import {TRACKS_DISPLAYED_LIMIT} from "../constants";

const RecentlyPlayedTracksSection = () => {
  const classes = useStyles();
  const {data, error} = useSWR<RecentlyPlayed[]>(
    "/api/recently-played",
    fetcher
  );

  const uniqueTracks = data
    ? data
        .filter((track, pos, arr) => {
          return arr.map((t) => t.title).indexOf(track.title) === pos;
        })
        .slice(0, TRACKS_DISPLAYED_LIMIT)
    : [];

  const isLoading = !data && !error;

  return (
    <Box py={5}>
      <Typography
        variant="h5"
        component="h3"
        gutterBottom
        className={classes.sectionHeader}>
        <Box pr={1} display="flex" alignItems="center">
          <SpotifyIcon />
        </Box>
        Recent Tracks
      </Typography>
      <Box pt={3}>
        {isLoading && <Typography>Loading...</Typography>}
        {error && (
          <Typography>Something went wrong loading recent tracks 🤔</Typography>
        )}
        {!error && data && <RecentlyPlayedTracksList tracks={uniqueTracks} />}
      </Box>
    </Box>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    sectionHeader: {
      display: "flex",
      alignItems: "center"
    }
  })
);

export default RecentlyPlayedTracksSection;
