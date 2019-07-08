import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import ProjectMedia from "./ProjectMedia";
import styled from "styled-components";

import Octokit from "@octokit/rest";
const OctokitWithPlugins = Octokit.plugin(
    require("@octokit/plugin-throttling")
);

const Content = styled.div`
    padding-bottom: 16px;
`;

const personalRepositoriesToShowcase = [
    "ariadne",
    "youtube-search",
    "oxomo",
    "micro-rss-parser",
    "health-sucks",
    "chronos",
    "juniper",
    "talos",
    "tellmehowyoureallyfeel"
];
const organizationRespositoriesToShowcase = ["shop-local"];

export default class ProjectsSection extends React.Component {
    state = {
        repositories: []
    };

    async componentDidMount() {
        let repositories = [];

        const octokit = new OctokitWithPlugins({
            auth: `token ${process.env.GITHUB_TOKEN}`,
            previews: ["mercy-preview"],
            throttle: {
                onRateLimit: (retryAfter, options) => {
                    octokit.log.warn(
                        `Request quota exhausted for request ${
                            options.method
                        } ${options.url}`
                    );

                    if (options.request.retryCount === 0) {
                        // only retries once
                        console.log(`Retrying after ${retryAfter} seconds!`);
                        return true;
                    }
                },
                onAbuseLimit: (retryAfter, options) => {
                    // does not retry, only logs a warning
                    octokit.log.warn(
                        `Abuse detected for request ${options.method} ${
                            options.url
                        }`
                    );
                }
            }
        });

        const personalRepos = await octokit.repos.listForUser({
            username: "go-diego"
        });

        repositories = personalRepos.data.filter(repo =>
            personalRepositoriesToShowcase.includes(repo.name)
        );

        const orgRepos = await octokit.repos.listForOrg({
            org: "Brightside-Technologies",
            type: "public"
        });
        repositories = [
            ...repositories,
            ...orgRepos.data.filter(repo =>
                organizationRespositoriesToShowcase.includes(repo.name)
            )
        ];

        repositories.forEach(async p => {
            const topics = await octokit.repos.listTopics({
                owner: p.owner.login,
                repo: p.name
            });
            p.topics = topics.data.names;
        });

        this.setState({repositories});

        //const rate = await octokit.rateLimit.get({});
    }

    render() {
        const {repositories} = this.state;

        return (
            <Section>
                <SectionTitle title="Projects" />
                <Content className="content">
                    <p>
                        The following are some exploratory projects, coding
                        assignments, and for-fun side-projects that showcase my
                        coding abilities.
                    </p>
                </Content>
                <div className="columns is-multiline">
                    {repositories
                        .sort(
                            (a, b) =>
                                new Date(b.updated_at) - new Date(a.updated_at)
                        )
                        .map(repo => (
                            <div key={repo.id} className="column is-half">
                                <ProjectMedia {...repo} />
                            </div>
                        ))}
                </div>
            </Section>
        );
    }
}
