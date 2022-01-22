import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  makeStyles,
  createStyles,
  ListSubheader,
  Theme,
  Box
} from "@material-ui/core";
import useSWR from "swr";
import {fetcher} from "lib/helpers";
import {Artist} from "types";

const TopArtistsList = () => {
  const classes = useStyles();
  const {data, error} = useSWR<Artist[]>("/api/top-artists", fetcher);
  console.log(data);
  return (
    <>
      {error && <Typography>Something went wrong 🤔</Typography>}
      {data && (
        <List className={classes.list} component="div" key="top-artist-list">
          <ListSubheader component="div" disableGutters>
            <Box pl={1}>Top Artists</Box>
            <Divider component="div" />
          </ListSubheader>
          {data.map((artist, index) => {
            return (
              <>
                <ListItem button href={artist.artistUrl} key={artist.artistUrl}>
                  <ListItemAvatar>
                    <Avatar
                      classes={{
                        root: classes.avatar
                      }}
                      src={artist.imageUrl}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={`#${index + 1} - ${artist.name}`} />
                </ListItem>
                {data.length - 1 !== index && (
                  <Divider
                    variant="inset"
                    component="div"
                    key={`top-artist-list-divider-${index}`}
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

export default TopArtistsList;
