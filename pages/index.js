import HomeHero from "../components/HomeHero";
import Layout from "../containers/Layout";
import Head from "../components/Head";
import LeadSection from "../components/LeadSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import ProjectsSection from "../components/ProjectsSection";
import ShowcaseSection from "../components/ShowcaseSection";

export default function HomePage() {
  return (
    <Layout>
      <Head title={`Home | Diego Bernal`} />
      <HomeHero />
      <LeadSection />
      <ExperienceSection />
      <EducationSection />
      <ShowcaseSection />
    </Layout>
  );
}
