import {createStyles, Divider, makeStyles} from "@material-ui/core";
import {gradient} from "util/theme";

const Navbar = () => {
  const classes = useStyles();
  return <Divider component="div" className={classes.divider} />;
};

const useStyles = makeStyles(() =>
  createStyles({
    divider: {
      background: gradient,
      height: "3px"
    }
  })
);

export default Navbar;
