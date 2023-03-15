import {Fragment} from "react";
import Image from "next/image";
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
  createStyles,
  Button
} from "@material-ui/core";
import {CloudDownload} from "@material-ui/icons";

import clskLogo from "../../public/clsk.png";
import espLogo from "../../public/esp.jpg";
import niftyIslandLogo from "../../public/niftyisland.png";

const experience = [
  {
    title: "Senior Frontend Engineer",
    company: "Nifty Island",
    companyLogo: niftyIslandLogo,
    startDate: "Mar 2022",
    endDate: "Present",
    link: "https://niftyisland.com/",
    description: [
      "Led the successful migration of a custom React app to NextJS, resulting in overall performance increase.",
      "Designed and implemented comprehensive testing strategies, including unit and e2e tests, resulting in a decrease in regression and production defects and an increase in overall code quality.",
      "Architected and maintained a component library as a reusable package including tests and Storybook stories.",
      "Integrated web3-enabled features into an NFT marketplace platform."
    ],
    skills: ["TypeScript", "React", "React Testing Library", "web3"]
  },
  {
    title: "Senior Frontend Engineer",
    company: "CleanSpark",
    companyLogo: clskLogo,
    location: "San Diego, CA ",
    startDate: "Oct 2019",
    endDate: "Mar 2022",
    link: "https://www.cleanspark.com/",
    description: [
      "Developed new functionalities and enhanced existing codebase while prioritizing performance considerations for a publicly traded organization.",
      "Implemented automated testing suite for unit and e2e tests, resulting in increased confidence.",
      "Updated existing React Native app and helped with deployment process."
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
    company: "ESP Personnel",
    companyLogo: espLogo,
    location: "Thousand Palms, CA ",
    startDate: "Jun 2014",
    endDate: "Oct 2019",
    link: "https://esppersonnel.com/",
    description: [
      "Developed and maintained a data-reporting web application using C#, SQL, and Bootstrap3.",
      "Created a front-end staffing suite web application utilizing AngularJS and Angular Material.",
      "Designed and maintained a profile-based web application for nurses with C#, SQL, and Bootstrap4.",
      "Enhanced client communication efficiency by integrating ReactJS client profile with the CRM system.",
      "Developed and maintained client JavaScript libraries for proprietary RESTful APIs.",
      "Improved call-center productivity by integrating click-to-dial functionality with the phone system."
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
      <Typography
        variant="h5"
        component="h3"
        gutterBottom
        className={classes.header}>
        Experience
        <Button
          href="/assets/diego-bernal-resume.pdf"
          target="_blank"
          className={classes.button}
          startIcon={<CloudDownload />}
          size="small"
          variant="outlined">
          Resume
        </Button>
      </Typography>
      <List component="div" disablePadding>
        {experience.map((item, index) => (
          <Fragment key={`experience-li-${index}`}>
            <ListItem component="div" disableGutters>
              <ListItemAvatar>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Avatar
                    component={(props) => (
                      <Box position="relative" {...props} bgcolor="unset">
                        <Image
                          placeholder="blur"
                          layout="fill"
                          objectFit="cover"
                          alt={item.company}
                          src={item.companyLogo}
                        />
                      </Box>
                    )}
                  />
                </a>
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  className: classes.primaryText
                }}
                secondary={
                  <Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary">
                      {item.company}
                    </Typography>
                    &nbsp; &bull; &nbsp;
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary">
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
              {item.description && (
                <ul>
                  {item.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          </Fragment>
        ))}
      </List>
    </Box>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    primaryText: {
      fontWeight: "bold"
    },
    chip: {
      [theme.breakpoints.up("sm")]: {
        marginRight: theme.spacing(0.5),
        marginTop: theme.spacing(0.5)
      },
      marginRight: theme.spacing(0.25),
      marginTop: theme.spacing(0.25)
    },
    header: {
      display: "flex",
      justifyContent: "space-between"
    },
    button: {}
  })
);

export default ExperienceSection;
