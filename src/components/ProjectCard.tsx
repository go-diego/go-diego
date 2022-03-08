import {makeStyles, createStyles} from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  CardActions,
  Chip,
  IconButton,
  Paper,
  Slide,
  Zoom
} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {useState} from "react";

import {Project} from "./ProjectsSection";

const ProjectCard = (props: Project) => {
  const {details, thumbnail, title, url, description} = props;
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      {details && (
        <Zoom in={showDetails}>
          <IconButton
            className={classes.expandMoreButton}
            size="small"
            onClick={handleShowDetails}>
            <Close />
          </IconButton>
        </Zoom>
      )}
      <CardActionArea
        href={url}
        target="_blank"
        rel="noreferrer"
        className={classes.cardActionArea}>
        <CardMedia
          className={classes.cardMedia}
          image={thumbnail}
          title={title}
        />
        <CardContent className={classes.cardContent}>
          <Box pb={3}>
            <Typography gutterBottom variant="h6" component="p">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      {details && (
        <CardActions className={classes.cardActions}>
          <Button
            className={classes.viewDetailsButton}
            onClick={handleShowDetails}
            size="small">
            View Details
          </Button>
        </CardActions>
      )}
      {details && (
        <Slide direction="up" in={showDetails} mountOnEnter unmountOnExit>
          <Paper className={classes.cardDetails}>
            <Typography
              variant="caption"
              component="p"
              style={{
                fontWeight: "bold"
              }}>
              Technical Description
            </Typography>
            <Typography component="div">{details?.description}</Typography>
            {details?.tech.map((tech) => (
              <Chip
                size="small"
                key={tech}
                label={tech}
                className={classes.chip}
              />
            ))}
          </Paper>
        </Slide>
      )}
    </Card>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    cardActions: {
      justifyContent: "center"
    },
    viewDetailsButton: {
      backgroundColor: theme.palette.grey[100],
      "&:hover": {
        backgroundColor: theme.palette.grey[200]
      }
    },
    cardDetails: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
      padding: theme.spacing(1),
      overflowY: "auto",
      "& p": {
        fontSize: 12
      },
      //   scrollbarColor: "red",
      scrollbarWidth: "thin",
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: theme.palette.grey[300]
      },
      "&::-webkit-scrollbar": {
        width: 8
      }
    },
    expandMoreButton: {
      position: "absolute",
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark
      },
      color: theme.palette.primary.contrastText,
      right: -7,
      top: -7,
      zIndex: 1
    },
    card: {
      width: "100%",
      height: "100%",
      position: "relative",
      overflow: "visible",
      display: "flex",
      flexDirection: "column"
    },
    cardActionArea: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1
    },
    cardContent: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingBottom: `${theme.spacing(0.5)}px !important`
    },
    cardMedia: {
      height: 250,
      width: "100%",
      borderRadius: "4px 4px 0 0"
    },
    chip: {
      fontSize: 12,
      [theme.breakpoints.up("sm")]: {
        marginRight: theme.spacing(0.5),
        marginTop: theme.spacing(0.5)
      },
      marginRight: theme.spacing(0.25),
      marginTop: theme.spacing(0.25)
    }
  })
);

export default ProjectCard;
