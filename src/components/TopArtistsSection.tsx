import {useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import useSWR from "swr";
import TimeIcon from "@material-ui/icons/WatchLater";
import {Button, Box, Typography} from "@material-ui/core";

import {fetcher} from "lib/helpers";
import {Artist, TimeRange} from "types";
import SpotifyIcon from "./SpotifyIcon";
import TopArtistsGridList from "./TopArtistsGridList";

const TimeRangeMap = {
  long_term: "All Time",
  short_term: "Recent"
};

export default function TopArtistsSection() {
  const classes = useStyles();
  const [timeRange, setTimeRange] = useState<TimeRange>("long_term");
  const {data, error} = useSWR<Artist[]>(
    `/api/top-artists?time_range=${timeRange}`,
    fetcher,
    {
      revalidateOnFocus: false
    }
  );

  const toggleTimeRange = () => {
    setTimeRange(timeRange === "long_term" ? "short_term" : "long_term");
  };

  const isLoading = !data && !error;

  return (
    <Box py={5}>
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        className={classes.sectionHeader}>
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Box pr={1} display="flex" alignItems="center">
              <SpotifyIcon />
            </Box>
            Top Artists
          </Box>
          <Box ml="34px">
            <Typography component="p" color="textSecondary">
              {TimeRangeMap[timeRange as "short_term" | "long_term"]}
            </Typography>
          </Box>
        </Box>
        <div>
          <Button
            startIcon={<TimeIcon />}
            size="small"
            variant="outlined"
            onClick={toggleTimeRange}>
            {timeRange === "long_term" ? "See Recent" : "See All Time"}
          </Button>
        </div>
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
      justifyContent: "space-between"
    }
  })
);
