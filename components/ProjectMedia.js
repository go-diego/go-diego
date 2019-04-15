import styled from "styled-components";
import distanceInWords from "date-fns/distance_in_words";

const Content = styled.div`
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

export default function ProjectMedia(props) {
    const {updated_at, homepage, name, description, clone_url, topics} = props;
    return (
        <Content className="has-background-light box">
            <div>
                <h2 className="title">{name}</h2>
                <p className="subtitle is-7">
                    {`Last updated ${distanceInWords(
                        new Date(updated_at),
                        new Date()
                    )} ago`}
                </p>
                <div className="content">
                    <p>{description}</p>
                </div>
                <div>
                    <p className="heading has-text-weight-bold">Topics</p>
                    <div className="tags">
                        {topics.map((topic, i) => (
                            <div key={i} className="tag is-dark">
                                {topic}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Level className="level is-mobile">
                <a
                    href={clone_url}
                    className="button is-link is-outlined level-item is-narrow"
                    target="_blank"
                    rel="noopener">
                    <span className="icon is-size-6">
                        <i className="fab fa-github" />
                    </span>
                    <span>Source</span>
                </a>
                {homepage && (
                    <a
                        href={homepage}
                        className="button is-link level-item is-narrow is-uppercase"
                        target="_blank"
                        rel="noopener">
                        <span className="icon is-size-6">
                            <i className="fas fa-globe" />
                        </span>
                        <span>Demo</span>
                    </a>
                )}
            </Level>
        </Content>
    );
}
