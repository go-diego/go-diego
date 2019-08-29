import Section from "./Section";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

const StyledSection = styled(Section)`
    padding-top: 10rem;
    padding-bottom: 5rem;
`;

const WillCodeForBeer = styled.div`
    margin-top: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default function LeadSection() {
    return (
        <StyledSection className="has-background-warning">
            <SectionTitle title="About Me" />
            <div className="content">
                <p>
                    For {distanceInWordsToNow(new Date(2014, 5, 24))}, I have
                    spent my time creating crisp and dynamic web applications
                    for the healthcare sector and Coachella Valley
                    entrepreneurs. So, I can definitely deliver diverse,
                    high-quality software using up-to-date coding platforms and
                    industry best practices.
                </p>

                <p>
                    I am available for brainstorming, consulting, programming,
                    drinking coffee and/or beer, or any combination of the
                    above.
                </p>
                <WillCodeForBeer className="box">
                    <span className="heading is-size-4 has-text-weight-bold">
                        Will Code For Beer
                    </span>
                    <p>
                        Need consulting? Need help on a programming assignment?{" "}
                        <a
                            className="has-text-weight-bold"
                            href="mailto:hola@godiego.me">
                            Buy me a beer!
                        </a>
                    </p>
                </WillCodeForBeer>
            </div>
        </StyledSection>
    );
}
