import {Fragment} from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";

const experience = [
  {
    degree: "B.S. Computer Engineering",
    minors: ["Minor in Mathematics", "Minor in Physics"],
    institution: "CSU San Bernardino",
    logo: "/csusb.png",
    location: "San Bernardino, CA ",
    startDate: "Sept 2009",
    endDate: "Jun 2014"
  }
];

const EducationSection = () => {
  return (
    <Box component="section" py={5}>
      <Typography variant="h5" gutterBottom>
        Education
      </Typography>
      <List component="div" disablePadding>
        {experience.map((item, index) => (
          <ListItem
            key={`education-li-${index}`}
            component="div"
            disableGutters>
            <ListItemAvatar>
              <Avatar src={item.logo} />
            </ListItemAvatar>
            <ListItemText
              primary={item.institution}
              secondaryTypographyProps={{
                component: "div"
              }}
              secondary={
                <Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textSecondary">
                    {item.degree}
                  </Typography>
                  &nbsp; &bull; &nbsp;
                  {item.minors.map((minor, i) => (
                    <Fragment key={minor}>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary">
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

export default EducationSection;
