import {
  Typography,
  makeStyles,
  createStyles,
  Theme,
  Box,
  Chip
} from "@material-ui/core";

const availableFor = [
  "Coffee ☕",
  "Freelancing 💼",
  "Beer 🍺",
  "Collaborating 🤝",
  "Mentoring 🧑‍💻",
  "Consulting 💡"
];

const IntroSection = () => {
  const classes = useStyles();
  return (
    <Box component="section" py={5}>
      <Typography align="center" component="h1" variant="h3" gutterBottom>
        Hola! 👋
      </Typography>
      <Typography align="center" component="h1" variant="h3">
        I&apos;m Diego.
      </Typography>
      <Typography
        color="textSecondary"
        variant="h6"
        align="center"
        gutterBottom
        className={classes.subtitle}>
        I&apos;m a software engineer based in Coachella Valley, California.
      </Typography>
      <Box py={2}>
        <Typography
          gutterBottom
          variant="caption"
          component="p"
          className={classes.available}>
          Available for
        </Typography>
        {availableFor.map((item, index) => (
          <Chip
            key={index}
            label={item}
            color="primary"
            variant="outlined"
            size="small"
            className={classes.chip}
          />
        ))}
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subtitle: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    available: {
      textTransform: "uppercase",
      fontWeight: "bold"
    },
    chip: {
      [theme.breakpoints.up("sm")]: {
        marginRight: theme.spacing(0.5),
        marginTop: theme.spacing(0.5)
      },
      marginRight: theme.spacing(0.25),
      marginTop: theme.spacing(0.25)
    }
  })
);

export default IntroSection;
