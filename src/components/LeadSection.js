import Section from "./Section";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import distanceInWordsStrict from "date-fns/distance_in_words_strict";

const StyledSection = styled(Section)`
  padding-top: 10rem;
  padding-bottom: 5rem;
`;

export default function LeadSection() {
  return (
    <StyledSection className="has-background-warning">
      <SectionTitle className="is-4 is-marginless" title="About Me" />
      <div className="content">
        <p>
          I am a software engineer with{" "}
          {distanceInWordsStrict(new Date(2014, 5, 24), new Date(), {
            unit: "Y"
          })}{" "}
          of experience based out of Coachella Valley.
        </p>

        <p>
          I am available for brainstorming, consulting, programming, drinking
          coffee and/or beer, or any combination of the above.
        </p>
      </div>
    </StyledSection>
  );
}
