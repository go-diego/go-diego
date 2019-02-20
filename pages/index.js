import HomeHero from "../components/HomeHero";
import Layout from "../containers/Layout";
import Head from "../components/Head";
import LeadSection from "../components/LeadSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import ProjectsSection from "../components/ProjectsSection";

import Octokit from "@octokit/rest";
const OctokitWithPlugins = Octokit.plugin(require("@octokit/plugin-throttling"));

export default function HomePage({projects}) {
    return (
        <Layout>
            <Head title={`Diego Bernal`} />
            <HomeHero />
            <LeadSection />
            <ExperienceSection />
            <EducationSection />
            <ProjectsSection projects={projects} />
        </Layout>
    );
}

HomePage.getInitialProps = async () => {
    const repositoriesShowcase = [
        "ariadne",
        "youtube-search",
        "oxomo",
        "micro-rss-parser",
        "health-sucks",
        "chronos",
        "juniper",
        "talos"
    ];

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
                octokit.log.warn(`Abuse detected for request ${options.method} ${options.url}`);
            }
        }
    });
    const rate = await octokit.rateLimit.get({});
    const repos = await octokit.repos.listForUser({username: "go-diego"});
    const projects = repos.data.filter(repo => repositoriesShowcase.includes(repo.name));

    projects.forEach(async p => {
        const topics = await octokit.repos.listTopics({owner: p.owner.login, repo: p.name});
        p.topics = topics.data.names;
    });

    return {
        projects
    };
    // const data = await import("../_data/_pages/_home.json");
    // return data.default;
};
