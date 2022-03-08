import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Theme,
  makeStyles,
  createStyles
} from "@material-ui/core";
import Image from "next/image";
import {formatDistanceToNow} from "date-fns";
import {Fragment} from "react";

import {blurPlaceHolderDataUrl, TRACKS_DISPLAYED_LIMIT} from "../constants";
import {RecentlyPlayed} from "types";

const AVATAR_SIZE = 50;

interface RecentlyPlayedTracksListProps {
  tracks: RecentlyPlayed[];
}

const RecentlyPlayedTracksList = ({tracks}: RecentlyPlayedTracksListProps) => {
  const classes = useStyles();

  return (
    <List className={classes.list} component="div" key="recently-played-list">
      {tracks.map((track, index) => {
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
                  component={({children, ...rest}) => (
                    <Image
                      src={track.imageUrl}
                      alt={track.title}
                      height={AVATAR_SIZE}
                      width={AVATAR_SIZE}
                      placeholder="blur"
                      blurDataURL={blurPlaceHolderDataUrl}
                      {...rest}
                    />
                  )}
                />
              </ListItemAvatar>
              <ListItemText
                primary={track.title}
                secondary={`${track.artist} - ${formatDistanceToNow(
                  new Date(track.played_at)
                )} ago`}
              />
            </ListItem>
            {index !== TRACKS_DISPLAYED_LIMIT - 1 && (
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
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      backgroundColor: theme.palette.background.paper
    },
    avatar: {
      width: AVATAR_SIZE,
      height: AVATAR_SIZE
    }
  })
);

export default RecentlyPlayedTracksList;
