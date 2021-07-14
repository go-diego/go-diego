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
        </StyledFooter>
    );
}
