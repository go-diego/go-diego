import {
  AppBar,
  Avatar,
  Container,
  createStyles,
  IconButton,
  makeStyles,
  Toolbar
} from "@material-ui/core";
import {Email, LinkedIn, GitHub, Twitter} from "@material-ui/icons";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      color="primary"
      elevation={1}>
      <Container maxWidth="sm">
        <Toolbar disableGutters>
          <Avatar src="/display.jpeg" />
          <div className={classes.spacer} />
          <IconButton
            href="https://twitter.com/diegocodesxyz"
            target="_blank"
            rel="noopener"
            size="medium"
            className={classes.navbarButton}
            aria-label="menu">
            <Twitter />
          </IconButton>
          <IconButton
            href="https://github.com/go-diego"
            target="_blank"
            rel="noopener"
            size="medium"
            className={classes.navbarButton}
            aria-label="menu">
            <GitHub />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/dbernal91/"
            target="_blank"
            rel="noopener"
            size="medium"
            className={classes.navbarButton}
            aria-label="menu">
            <LinkedIn />
          </IconButton>
          <IconButton
            href="mailto:hola@godiego.me"
            size="medium"
            className={classes.navbarButton}
            aria-label="menu">
            <Email />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.background.paper
    },
    spacer: {
      flexGrow: 1
    },
    navbarButton: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark
      },
      padding: theme.spacing(1),
      marginLeft: theme.spacing(1),
      height: 40,
      width: 40
    }
  })
);

export default Navbar;
