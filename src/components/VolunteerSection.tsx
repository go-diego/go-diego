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
  createStyles
} from "@material-ui/core";

import larbLogo from "../../public/larb.png";

const experience = [
  {
    title: "Frontend Developer",
    company: "Los Angeles Review of Books",
    companyLogo: larbLogo,
    link: "https://lareviewofbooks.org/",
    description: [
      "Helped implement a new design for the website for LARB's website following their developer's lead."
    ],
    startDate: "Sep 2023",
    endDate: "Nov 2023",
    skills: ["TypeScript", "React", "NextJS"]
  }
  // {
  //   title: "Instructor/Mentor",
  //   company: "",
  //   companyLogo: "",
  //   location: "",
  //   startDate: "Oct 2019",
  //   endDate: "Mar 2022",
  //   link: "",
  //   description: [
  //     "Co-led a 10-week product development boot-camp, facilitated by Service Now, for a cohort of students from Benedict College"
  //   ],
  //   skills: []
  // }
  // {
  //   title: "Web App Developer",
  //   company: "Alianza Coachella Valley",
  //   companyLogo: "",
  //   link: "https://www.alianzacv.org/",
  //   description:
  //     "Developed https://saltonseascience.org/ for Alianza Coachella Valley. I set up the project, implemented the design, deployed the site, and managed DNS configuration.",
  //   skills: ["TypeScript", "React", "NextJS"]
  // }
];

const VolunteerSection = () => {
  const classes = useStyles();
  return (
    <Box component="section" py={5}>
      <Typography
        variant="h5"
        component="h3"
        gutterBottom
        className={classes.header}>
        Volunteer
      </Typography>
      <List component="div" disablePadding>
        {experience.map((item, index) => (
          <Fragment key={`volunteer-li-${index}`}>
            <ListItem component="div" disableGutters>
              {item.companyLogo && (
                <ListItemAvatar>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer">
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
                  ) : (
                    <span />
                  )}
                </ListItemAvatar>
              )}
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

export default VolunteerSection;
