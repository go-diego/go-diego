import Section from "./Section";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";

const Row = styled.div`
    display: flex;
`;

const Figure = styled.figure`
    overflow: hidden;
    border-radius: 8px;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const EducationListItem = styled(Row)`
    ${"" /* align-items: center; */}
`;

const EducationListItemContent = styled(Row)`
    flex-grow: 1;
    justify-content: space-between;
    padding-left: 6px;
`;

export default function EducationSection() {
    return (
        <Section>
            <SectionTitle title="Education" />
            <EducationListItem>
                <Figure className="image is-64x64">
                    <a href="https://www.csusb.edu/" target="_blank" rel="noopener">
                        <Img className="is-rounded" src="/static/csusb.png" />
                    </a>
                </Figure>
                <EducationListItemContent>
                    <div>
                        <p className="title is-marginless is-5 is-size-6-mobile">
                            CSU San Bernardino
                        </p>
                        <p className="is-6 is-size-7-mobile has-text-weight-bold">
                            Bachelors of Science in Computer Engineering
                        </p>
                        <p className="is-size-7-mobile">Minor in Mathematics</p>
                        <p className="is-size-7-mobile">Minor in Applied Physics</p>
                    </div>
                    <span className="is-size-7-mobile">2009 &ndash; 2014</span>
                </EducationListItemContent>
            </EducationListItem>
        </Section>
    );
}
