import styled from "styled-components";

const Hero = styled.section`
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23b5b5b5' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const Box = styled.div`
    margin-bottom: -2.5rem;
    width: 75%;
    z-index: 1;
`;

const Row = styled.div`
    display: flex;
    justify-content: center;
`;

const Level = styled.nav`
    padding-top: 8px;
    justify-content: center;
    .level-item {
        padding-right: 8px;
        padding-left: 8px;
    }
`;

const LevelLink = styled.a`
    &:hover {
        background-color: transparent !important;
    }
`;

export default function HomeHero() {
    return (
        <Hero className="hero is-medium">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="is-family-secondary title">Diego Bernal</h1>
                    <h2 className="subtitle is-uppercase">
                        Front-End Developer
                    </h2>
                    <h2 className="subtitle is-5">
                        Coachella Valley, California
                    </h2>
                </div>
            </div>
            <Row>
                <Box className="has-shadow box has-background-light">
                    <p className="has-text-centered heading is-size-6">
                        Say Hi
                    </p>
                    <Level className="level is-mobile">
                        <LevelLink
                            href="https://www.facebook.com/diego.bernal.91"
                            target="_blank"
                            rel="noopener"
                            className="navbar-item level-item is-narrow">
                            <span className="icon is-size-3">
                                <i className="fab fa-facebook-f" />
                            </span>
                        </LevelLink>
                        <LevelLink
                            href="https://www.linkedin.com/in/dbernal91/"
                            target="_blank"
                            rel="noopener"
                            className="navbar-item level-item is-narrow">
                            <span className="icon is-size-3">
                                <i className="fab fa-linkedin-in" />
                            </span>
                        </LevelLink>
                        <LevelLink
                            href="https://github.com/go-diego"
                            target="_blank"
                            rel="noopener"
                            className="navbar-item level-item is-narrow">
                            <span className="icon is-size-3">
                                <i className="fab fa-github" />
                            </span>
                        </LevelLink>
                        <LevelLink
                            href="https://stackoverflow.com/users/6258853/go-diego"
                            target="_blank"
                            rel="noopener"
                            className="navbar-item level-item is-narrow">
                            <span className="icon is-size-3">
                                <i className="fab fa-stack-overflow" />
                            </span>
                        </LevelLink>
                        <LevelLink
                            href="mailto:hola@godiego.me"
                            className="navbar-item level-item is-narrow">
                            <span className="icon is-size-3">
                                <i className="fas fa-at" />
                            </span>
                        </LevelLink>
                    </Level>
                </Box>
            </Row>
        </Hero>
    );
}
