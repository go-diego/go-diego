import styled from "styled-components";

const StyledSectionTitle = styled.h2`
    padding-bottom: 1rem;
`;

export default function SectionTitle(props) {
    const {title, className} = props;
    return (
        <StyledSectionTitle
            className={`is-family-secondary title is-size-4-mobile ${className || ""}`}>
            {title}
        </StyledSectionTitle>
    );
}
