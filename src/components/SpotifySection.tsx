import {
  List,
  makeStyles,
  createStyles,
  Theme,
  Box,
  Paper
} from "@material-ui/core";
import RecentlyPlayedList from "components/RecentlyPlayedList";
import TopArtistsList from "components/TopArtistsList";

const SpotifySection = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <List className={classes.list} component="div">
        <RecentlyPlayedList />
        <TopArtistsList />
      </List>
    </Paper>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(8)
    },
    list: {
      backgroundColor: theme.palette.background.paper
    },
    avatar: {
      width: 50,
      height: 50
    }
  })
);

export default SpotifySection;
