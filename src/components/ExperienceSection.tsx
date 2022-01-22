import {Fragment} from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Chip,
  makeStyles,
  createStyles
} from "@material-ui/core";

const experience = [
  {
    title: "Front-End Engineer",
    company: "CleanSpark",
    companyLogo: "/clsk.png",
    location: "San Diego, CA ",
    startDate: "Oct 2019",
    endDate: "Present",
    description: [
      "Build new features and deploy patches to an existing React SPA",
      "Develop strategy for automated unit + integration testing",
      "Modernize code base using newest React features and best practices",
      "Add new features to existing React Native app"
    ],
    skills: [
      "TypeScript",
      "React",
      "Redux",
      "React Testing Library",
      "Cypress",
      "React Native"
    ]
  },
  {
    title: "Web Developer",
    company: "Readylink Healthcare",
    companyLogo: "/pca.png",
    location: "Thousand Palms, CA ",
    startDate: "Jun 2014",
    endDate: "Oct 2019",
    description: [
      <>
        Built and maintained an ASP.NET MVC application using{" "}
        <code>jQuery</code> and <code>Bootstrap 3</code> on the front-end fed by
        controllers via <code>SQL</code> stored procedures.
      </>,
      <>
        Built and maintained SPA with <code>AngularJS</code> and{" "}
        <code>Angular Material</code>. Project consumes REST API endpoints and
        is built for production and deployed using <code>Gulp</code> and{" "}
        <code>NodeJS</code>.
      </>,
      <>
        Built and maintained SPA with <code>ReactJS</code> and{" "}
        <code>Material UI</code>. Project consumes REST API endpoints and is
        released to production using <code>Create React App</code> and{" "}
        <code>NodeJS</code> and/or <code>Bash</code> as needed.
      </>,
      <>
        Developed a universal Javascript client library around our REST APIs so
        that any client can use it. Serves as a data service layer and stands
        alone in its own repository. Built with <code>ES6</code> classes and
        bundled as a universal library with <code>Rollup</code>.
      </>,
      <>
        Developed a universal Javascript client library that interfaces with
        third-party phone system.
      </>
    ],
    skills: [
      "Rollup",
      "React",
      "Redux",
      "React Testing Library",
      "Cypress",
      "C#",
      "SQL"
    ]
  }
];

const ExperienceSection = () => {
  const classes = useStyles();
  return (
    <Box component="section" py={5}>
      <Typography variant="h5" gutterBottom>
        Experience
      </Typography>
      <List component="div" disablePadding>
        {experience.map((item, index) => (
          <Fragment key={`experience-li-${index}`}>
            <ListItem component="div" disableGutters>
              <ListItemAvatar>
                <Avatar src={item.companyLogo} />
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={
                  <Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textSecondary">
                      {item.company}
                    </Typography>
                    &nbsp; &bull; &nbsp;
                    <Typography
                      component="span"
                      variant="body2"
                      color="textSecondary">
                      {`${item.startDate} - ${item.endDate}`}
                    </Typography>
                  </Fragment>
                }
              />
            </ListItem>
            <div>
              <Box pl={5}>
                {item.skills.map((skill) => (
                  <Chip
                    size="small"
                    key={skill}
                    label={skill}
                    className={classes.chip}
                  />
                ))}
              </Box>
              <ul>
                {item.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          </Fragment>
        ))}
      </List>
    </Box>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
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

export default ExperienceSection;
