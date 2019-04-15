import Section from "./Section";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";

const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ResumeLinkContainer = styled(Row)`
    display: flex;
    align-items: center;
    justify-content: start;
    a {
        margin-left: 0.25rem;
        padding-right: 0.25rem;
        padding-left: 0.25rem;
    }
`;

const NoShrink = styled.div`
    flex-shrink: 0;
`;

export default function ExperienceSection() {
    return (
        <Section>
            <SectionTitle title="Experience" />
            {/* <ResumeLinkContainer>
                <span>You can find a copy of my resume </span>
                <a className="button has-text-link is-text" href="/static/cv.pdf">
                    here
                </a>
            </ResumeLinkContainer> */}
            <div>
                <Row>
                    <div>
                        <p className="title is-5 is-size-6-mobile">
                            Readylink Healthcare
                        </p>
                        <p className="subtitle is-5 is-size-6-mobile">
                            Web Developer
                        </p>
                    </div>

                    <span className="is-size-7-mobile">
                        Jun 2014 &ndash; Present
                    </span>
                </Row>
                <div className="content">
                    <ul>
                        <li>
                            Built and currently maintaining (as needed) an
                            ASP.NET MVC application using <code>jQuery</code>{" "}
                            and <code>Bootstrap 3</code> on the front-end fed by
                            controllers via <code>SQL</code> stored procedures.
                        </li>
                        <li>
                            Built and currently maintaining SPA with{" "}
                            <code>AngularJS</code> and{" "}
                            <code>Angular Material</code>. Project consumes REST
                            API endpoints and is built for production and
                            deployed using <code>Gulp</code> and{" "}
                            <code>NodeJS</code>.
                        </li>
                        <li>
                            Built and currently maintaining SPA with{" "}
                            <code>ReactJS</code> and <code>Material UI</code>.
                            Project consumes REST API endpoints and is released
                            to production using <code>Create React App</code>{" "}
                            and <code>NodeJS</code> and/or <code>Bash</code> as
                            needed.
                        </li>
                        <li>
                            Developed a javascript client library around our
                            REST APIs so that any client can use it. Serves as a
                            data service layer and stands alone in its own
                            repository. Built with <code>ES6</code> classes and
                            bundled as a universal library with{" "}
                            <strike>
                                <code>Webpack</code>
                            </strike>
                            <code>Rollup</code>.
                        </li>
                    </ul>
                </div>
            </div>
        </Section>
    );
}
