import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Theme,
  makeStyles,
  createStyles,
  Box
} from "@material-ui/core";
import {formatDistanceToNow} from "date-fns";
import {Fragment} from "react";
import useSWR from "swr";
import {fetcher} from "lib/helpers";
import {RecentlyPlayed} from "types";
import SpotifyIcon from "./SpotifyIcon";

const TRACK_LIMIT = 5;

const RecentlyPlayedList = () => {
  const classes = useStyles();
  const {data, error} = useSWR<RecentlyPlayed[]>(
    "/api/recently-played",
    fetcher
  );

  const uniqueTracks = data
    ? data.filter((track, pos, arr) => {
        return arr.map((t) => t.title).indexOf(track.title) === pos;
      })
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
        {!error && data && (
          <List
            className={classes.list}
            component="div"
            key="recently-played-list">
            {uniqueTracks.slice(0, TRACK_LIMIT).map((track, index) => {
              return (
                <Fragment key={track.songUrl}>
                  <ListItem
                    component="a"
                    button
                    href={track.songUrl}
                    target="_blank"
                    rel="noreferrer">
                    <ListItemAvatar>
                      <Avatar
                        classes={{
                          root: classes.avatar
                        }}
                        src={track.imageUrl}
                        alt={track.title}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={track.title}
                      secondary={`${track.artist} - ${formatDistanceToNow(
                        new Date(track.played_at)
                      )} ago`}
                    />
                  </ListItem>
                  {index !== TRACK_LIMIT - 1 && (
                    <Divider
                      variant="inset"
                      component="div"
                      key={`recently-played-list-divider-${index}`}
                    />
                  )}
                </Fragment>
              );
            })}
          </List>
        )}
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      backgroundColor: theme.palette.background.paper
    },
    avatar: {
      width: 50,
      height: 50
    },
    sectionHeader: {
      display: "flex",
      alignItems: "center"
    }
  })
);

export default RecentlyPlayedList;
