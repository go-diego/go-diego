import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default function Footer() {
    return (
        <StyledFooter className="footer has-text-light has-background-dark">
            <p>
                Made with{" "}
                <span>
                    <i className="has-text-danger fas fa-heart" />
                </span>{" "}
                in the Coachella Valley
            </p>
            <p>
                Powered by{" "}
                <span>
                    <a
                        className="has-text-weight-bold has-text-light"
                        href="https://bulma.io"
                        target="_blank"
                        rel="noopener">
                        Bulma
                    </a>
                </span>{" "}
                +{" "}
                <span>
                    <a
                        className="has-text-weight-bold has-text-light"
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener">
                        NextJS
                    </a>
                </span>{" "}
                +{" "}
                <span>
                    <a
                        className="has-text-weight-bold has-text-light"
                        href="https://www.netlify.com/"
                        target="_blank"
                        rel="noopener">
                        Netlify
                    </a>
                </span>
            </p>
        </StyledFooter>
    );
}
