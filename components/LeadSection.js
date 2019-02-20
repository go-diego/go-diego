import Section from "./Section";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

const StyledSection = styled(Section)`
    padding-top: 10rem;
    padding-bottom: 5rem;
`;

export default function LeadSection() {
    return (
        <StyledSection className="has-background-warning">
            <SectionTitle title="About Me" />
            <div className="content">
                <p>
                    I'm a front-end developer with a background in engineering and mathematics and{" "}
                    {distanceInWordsToNow(new Date(2014, 5, 24))} of professional experience. From
                    static websites to dynamic web applications, I can deliver quality software
                    using modern tooling and best practices.
                </p>
                <p>
                    I am available for consulting, brainstorming, developing, drinking coffee, or
                    any combination of these.
                </p>
            </div>
        </StyledSection>
    );
}
