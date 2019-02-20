import Section from "./Section";
import SectionTitle from "./SectionTitle";
import ProjectMedia from "./ProjectMedia";
import styled from "styled-components";

const Content = styled.div`
    padding-bottom: 16px;
`;

export default function ProjectsSection({projects}) {
    return (
        <Section className="has-background-warning">
            <SectionTitle title="Projects" />
            <Content className="content">
                <p>
                    The following are some exploratory projects, coding assignments, and for-fun
                    side-projects that showcase my coding abilities.
                </p>
            </Content>
            {projects &&
                projects.length > 0 &&
                projects
                    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                    .map(p => <ProjectMedia key={p.id} {...p} />)}
        </Section>
    );
}
