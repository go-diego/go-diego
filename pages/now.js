import styled from "styled-components";
import Layout from "../containers/Layout";
import Head from "../components/Head";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import SpotifyPlaysSection from "../components/SpotifyPlaysSection";

const Hero = styled.section`
  background-color: #ffdd57;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

export default function NowPage() {
  return (
    <Layout>
      <Head title="Now | Diego Bernal" />
      <Hero className="hero is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="is-family-secondary title">Right Now</h1>
            <h2 className="subtitle is-4">
              A brief update of what's going on in my life
            </h2>
          </div>
        </div>
      </Hero>
      <Section>
        <SectionTitle className="is-4 is-marginless" title="Location" />
        <p>I currently live in sunny Indio, California.</p>
      </Section>
      <Section>
        <SectionTitle className="is-4 is-marginless" title="Tech Stack" />
        <p>
          For the web dev nerds out there, I have been into ReactJS,{" "}
          <a
            className="has-text-weight-bold"
            href="https://nextjs.org/"
            rel="noopener">
            NextJS
          </a>
          , and all things &nbsp;
          <a
            className="has-text-weight-bold"
            href="https://jamstack.org/"
            rel="noopener">
            JAMstack
          </a>{" "}
          these days.
        </p>{" "}
      </Section>
      {/* <Section>
                <SectionTitle className="is-4 is-marginless" title="News" />
                <p>
                    I am almost a month into my new job. I now work from home
                    now.
                </p>
            </Section> */}
      <SpotifyPlaysSection />
      <Section>
        <p>
          <i>Last updated January 28, 2019</i>
        </p>
      </Section>
    </Layout>
  );
}
