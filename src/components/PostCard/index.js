import React from "react";
import styled from "styled-components";
import Content from "./Content";
import Media from "./Media";
import Loading from "../Loading";

const Article = styled.article`
  min-height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  flex-grow: 1;
`;

const Column = styled.div`
  order: ${props => (props.isReversed ? "-1" : 0)};
`;

export default function PostCard({
  mediaType,
  isReversed,
  isLoading,
  src,
  alt,
  title,
  subtitle,
  description,
  link,
  linkAs,
  isTargetBlank,
  children
}) {
  return (
    <Article className="box is-paddingless is-clipped">
      {isLoading && <Loading />}
      {!isLoading && (
        <Row className="columns is-marginless">
          <Column
            className={`has-background-dark column is-paddingless ${
              isReversed ? "" : "is-half"
            }`}>
            <Media
              link={link}
              src={src}
              alt={alt}
              isTargetBlank={isTargetBlank}
              title={title}
              isLoading={isLoading}
              mediaType={mediaType}
            />
          </Column>
          <Column
            isReversed={isReversed}
            className={`column ${isReversed ? "is-half" : ""}`}>
            <Content isLoading={isLoading} title={title} subtitle={subtitle}>
              {children}
            </Content>
          </Column>
        </Row>
      )}
    </Article>
  );
}
