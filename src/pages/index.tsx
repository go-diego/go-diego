import type {NextPage} from "next";
import {Container, makeStyles, createStyles, Theme} from "@material-ui/core";

import SpotifySection from "components/SpotifySection";
import IntroSection from "components/IntroSection";
import ExperienceSection from "components/ExperienceSection";
import EducationSection from "components/EducationSection";
import ProjectsSection from "components/ProjectsSection";
import Meta from "components/Meta";
import NftCollectionSection from "components/NftCollectionSection";

const HomePage: NextPage = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" component="main" className={classes.main}>
      <Meta />
      <IntroSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      {/* <NftCollectionSection /> */}
      <SpotifySection />
    </Container>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      paddingTop: theme.spacing(10)
    },
    list: {
      backgroundColor: theme.palette.background.paper
    },
    avatar: {
      width: 50,
      height: 50
    }
  })
);

export default HomePage;
