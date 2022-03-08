import {Typography, Box, Grid, GridProps} from "@material-ui/core";

import ProjectCard from "./ProjectCard";

export type Project = {
  title: string;
  description: React.ReactNode;
  details?: {
    description: React.ReactNode;
    tech: string[];
  };
  url: string;
  thumbnail: string;
  gridProps: GridProps;
};

const projects: {[key: string]: Project} = {
  cvbuzz: {
    title: "CVBuzz",
    description:
      "A web application that allows business owners and entrepreneurs of the Coachella Valley to create a one-page business profile and share it anywhere.",
    details: {
      description: (
        <>
          <p>
            This is my attempt at a SaaS product. It&apos;s a platform that
            allows users (target audience is business owners/entrepreneurs in
            the Coachella Valley) to create a profile for their business or
            services. Users can add links to their social medias, add contact
            information, add links to external sites, embed their Instagram
            feed, embed their Twitter feed, embed YouTube videos, embed Twitch
            Videos, etc.
          </p>
          <p>
            Authentication is managed with Firebase Authentication and data is
            stored in Firestore.
          </p>
        </>
      ),
      tech: ["NextJS", "Firebase", "Material UI", "Vercel"]
    },
    url: "https://cv.buzz/",
    thumbnail: "cvbuzz.png",
    gridProps: {
      xs: 12,
      sm: 6
    }
  },
  cvg: {
    title: "Coachella Valley Gives",
    description:
      "An emergency relief fund for Coachella Valley residents affected by COVID-19",
    details: {
      description: (
        <>
          <p>
            This website uses Google Sheets as a database. Folks seeking help
            would fill out an application on Google Forms. The submission would
            then be added as a record in a sheet where we would keep track of
            whether or not we were able to help the applicant and with how much
            money. From that sheet, we are able to display things like total
            amount of money disbursed, total amount of money still needed, and
            the number of people who have been helped.
          </p>
          <p>
            Donation information comes from GoFundMe&apos;s API. Although they
            don&apos;t provide a public API, I was able to look at the bundled
            source and network requests to figure out which endpoints I needed
            to display a list of donations.
          </p>
        </>
      ),
      tech: ["NextJS", "Bulma CSS", "Netlify", "Google APIs"]
    },
    url: "https://coachellavalley.gives/",
    thumbnail: "/cvg.png",
    gridProps: {
      xs: 12,
      sm: 6
    }
  },
  covid19cv: {
    title: "COVID-19 Updates for the Coachella Valley",
    description:
      "A website that provides information about COVID-19 in the Coachella Valley",
    details: {
      description: (
        <>
          <p>
            This website uses data from the{" "}
            <a href="https://www.rivcoph.org/" target="_blank" rel="noreferrer">
              Riverside University Health System Public Health
            </a>
            . They had a map and some tables that tracked COVID cases in the
            Riverside County. I was able to look at the network requests and
            find the endpoints they were using for these visualizations.
            Although it wasn&apos;t an API they offered publicly, I was able to
            use the same data source and filter out cities not in the Coachella
            Valley to build this project.
          </p>
          <p>
            Although those endpoints are still live, it doesn&apos;t look like
            they are being updated any longer so the data is now stale.
          </p>
        </>
      ),
      tech: ["NextJS", "Bulma CSS", "Netlify"]
    },

    url: "https://covid19cv.info/",
    thumbnail: "covid19cvinfo.png",
    gridProps: {
      xs: 12
    }
  }
};

const ProjectsSection = () => {
  return (
    <Box component="section" py={5}>
      <Typography variant="h5" component="h3" gutterBottom>
        Projects
      </Typography>
      <Box py={3}>
        <Grid container spacing={2}>
          {Object.keys(projects).map((key) => {
            return (
              <Grid
                key={key}
                item
                {...projects[key].gridProps}
                style={{
                  overflow: "hidden"
                }}>
                <ProjectCard {...projects[key]} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProjectsSection;
