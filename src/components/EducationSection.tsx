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
  makeStyles
} from "@material-ui/core";

import csusbLogo from "../../public/csusb.png";

const experience = [
  {
    degree: "B.S. Computer Engineering",
    minors: ["Minor in Mathematics", "Minor in Physics"],
    institution: "CSU San Bernardino",
    logo: csusbLogo,
    location: "San Bernardino, CA ",
    startDate: "Sept 2009",
    endDate: "Jun 2014"
  }
];

const EducationSection = () => {
  const classes = useStyles();
  return (
    <Box component="section" py={5}>
      <Typography variant="h5" component="h3" gutterBottom>
        Education
      </Typography>
      <List component="div" disablePadding>
        {experience.map((item, index) => (
          <ListItem
            key={`education-li-${index}`}
            component="div"
            disableGutters>
            <ListItemAvatar>
              <Avatar
                component={(props) => (
                  <Box position="relative" {...props} bgcolor="unset">
                    <Image
                      placeholder="blur"
                      layout="fill"
                      objectFit="cover"
                      alt={item.institution}
                      src={item.logo}
                    />
                  </Box>
                )}
              />
            </ListItemAvatar>
            <ListItemText
              primary={item.institution}
              primaryTypographyProps={{
                className: classes.primaryText
              }}
              secondaryTypographyProps={{
                component: "div",
                color: "textPrimary"
              }}
              secondary={
                <Fragment>
                  <Typography component="span" variant="body2">
                    {item.degree}
                  </Typography>
                  &nbsp; &bull; &nbsp;
                  {item.minors.map((minor, i) => (
                    <Fragment key={minor}>
                      <Typography component="span" variant="body2">
                        {minor}
                      </Typography>
                      {i !== item.minors.length - 1 && (
                        <>&nbsp; &bull; &nbsp;</>
                      )}
                    </Fragment>
                  ))}
                  <Typography
                    component="p"
                    variant="caption">{`${item.startDate} - ${item.endDate}`}</Typography>
                </Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  primaryText: {
    fontWeight: "bold"
  }
}));

export default EducationSection;
