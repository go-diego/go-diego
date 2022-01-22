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
  ListSubheader,
  Box
} from "@material-ui/core";
import useSWR from "swr";
import {fetcher} from "lib/helpers";
import {RecentlyPlayed} from "types";
import {formatDistanceToNow} from "date-fns";

const RecentlyPlayedList = () => {
  const classes = useStyles();
  const {data, error} = useSWR<RecentlyPlayed[]>(
    "/api/recently-played",
    fetcher
  );
  console.log(data);

  const uniqueTracks = data
    ? data.filter((track, pos, arr) => {
        return arr.map((t) => t.title).indexOf(track.title) === pos;
      })
    : [];

  return (
    <>
      {error && <Typography>Something went wrong 🤔</Typography>}
      {data && (
        <List
          className={classes.list}
          component="div"
          key="recently-played-list">
          <ListSubheader component="div" disableGutters>
            <Box pl={1}>Recently Played</Box>
            <Divider component="div" />
          </ListSubheader>
          {uniqueTracks.slice(0, 10).map((track, index) => {
            return (
              <>
                <ListItem button href={track.songUrl} key={track.songUrl}>
                  <ListItemAvatar>
                    <Avatar
                      classes={{
                        root: classes.avatar
                      }}
                      src={track.imageUrl}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={track.title}
                    secondary={`${track.artist} - ${formatDistanceToNow(
                      new Date(track.played_at)
                    )} ago`}
                  />
                </ListItem>
                {index !== 9 && (
                  <Divider
                    variant="inset"
                    component="div"
                    key={`recently-played-list-divider-${index}`}
                  />
                )}
              </>
            );
          })}
        </List>
      )}
    </>
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
    }
  })
);

export default RecentlyPlayedList;
