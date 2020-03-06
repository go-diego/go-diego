import React from "react";
import styled from "styled-components";
import distanceInWords from "date-fns/distance_in_words";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import PostCard from "./PostCard/index";

import Octokit from "@octokit/rest";
import Loading from "./Loading";
const OctokitWithPlugins = Octokit.plugin(
  require("@octokit/plugin-throttling")
);

const Content = styled.div`
  padding-bottom: 16px;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Level = styled.nav`
  padding-top: 16px;
  justify-content: start;
  .level-item {
    padding-right: 8px;
    padding-left: 8px;
  }
`;

const personalRepositoriesToShowcase = ["mickandrorty", "oxomo"];

const repositoriesMetadata = {
  mickandrorty: {
    image: "/mickandrorty.png"
  },
  oxomo: {
    image: "/oxomo.png"
  }
};

export default class ShowcaseSection extends React.Component {
  state = {
    repositories: [],
    isLoading: true
  };

  async componentDidMount() {
    const octokit = new OctokitWithPlugins({
      auth: `token ${process.env.GITHUB_TOKEN}`,
      previews: ["mercy-preview"],
      throttle: {
        onRateLimit: (retryAfter, options) => {
          octokit.log.warn(
            `Request quota exhausted for request ${options.method} ${options.url}`
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
            `Abuse detected for request ${options.method} ${options.url}`
          );
        }
      }
    });

    const personalRepos = await octokit.repos.listForUser({
      username: "go-diego"
    });

    let repositories = personalRepos.data.filter(repo =>
      personalRepositoriesToShowcase.includes(repo.name)
    );

    const promises = repositories.map(async p => {
      const topics = await octokit.repos.listTopics({
        owner: p.owner.login,
        repo: p.name
      });
      p.topics = topics.data.names;
      p = {
        ...p,
        ...repositoriesMetadata[p.name]
      };
      return p;
    });

    repositories = await Promise.all(promises);
    this.setState({repositories, isLoading: false});
  }

  render() {
    const {repositories, isLoading} = this.state;

    return (
      <Section className="has-background-warning">
        <SectionTitle className="is-4 is-marginless" title="Showcase" />
        <Content className="content">
          <p>
            The following are some for-fun side-projects that showcase my coding
            abilities.
          </p>
        </Content>
        <div className="columns is-multiline">
          {isLoading && <Loading>Loading...</Loading>}
          {!isLoading &&
            repositories
              .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
              .map(repo => (
                <PostCard
                  key={repo.name}
                  isLoading={false}
                  alt={repo.name}
                  src={repo.image}
                  title={repo.name}>
                  <ProjectContent className="content">
                    <p>{repo.description}</p>
                    <div>
                      <p className="heading has-text-weight-bold">Tech Stack</p>
                      <div className="tags">
                        {repo.topics.map((topic, i) => (
                          <div key={i} className="tag is-dark">
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Level className="level is-mobile">
                      {/* <a
                      href={repo.clone_url}
                      className="button is-link is-outlined level-item is-narrow"
                      target="_blank"
                      rel="noopener">
                      <span className="icon is-size-6">
                        <i className="fab fa-github" />
                      </span>
                      <span>Source</span>
                    </a> */}
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          className="button is-link level-item is-narrow is-uppercase"
                          target="_blank"
                          rel="noopener">
                          <span className="icon is-size-6">
                            <i className="fas fa-globe" />
                          </span>
                          <span>Check it Out</span>
                        </a>
                      )}
                    </Level>
                    {/* <p className="subtitle is-7">
                    {`Last updated ${distanceInWords(
                      new Date(repo.updated_at),
                      new Date()
                    )} ago`}
                  </p> */}
                  </ProjectContent>
                </PostCard>
              ))}
        </div>
      </Section>
    );
  }
}
