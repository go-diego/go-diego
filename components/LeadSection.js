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
                    I'm a front-end developer with a background in engineering
                    and mathematics and{" "}
                    {distanceInWordsToNow(new Date(2014, 5, 24))} of
                    professional experience. From static websites to dynamic web
                    applications, I can deliver quality software using modern
                    tooling and best practices.
                </p>
                <p>
                    These days, I'm into ReactJS,{" "}
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
                    </a>
                    .
                </p>
                <p>
                    I am available for consulting, brainstorming, programming,
                    drinking coffee, drinking beer, or any combination of these.
                </p>
            </div>
        </StyledSection>
    );
}
