import React from "react";
import Link from "next/link";
import styled from "styled-components";
// import ContentLoader from "react-content-loader";

// const ContentSkeleton = () => (
//     <ContentLoader
//         height={150}
//         width={300}
//         speed={1}
//         primaryColor={"#333"}
//         secondaryColor={"#212121"}>
//         <rect x="6" y="5" rx="0" ry="0" width="95%" height="30" />
//         <rect x="6" y="40" rx="0" ry="0" width="95%" height="15" />
//         <rect x="6" y="60" rx="0" ry="0" width="95%" height="15" />
//     </ContentLoader>
// );

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export default function PostCardContent({
  children,
  title,
  subtitle,
  isLoading
}) {
  return (
    <React.Fragment>
      {!isLoading && (
        <Container>
          <div>
            <p className="title is-size-4-tablet">{title}</p>
            {subtitle && (
              <p className="subtitle is-size-6-mobile">{subtitle}</p>
            )}
          </div>
          <Content>{children}</Content>
        </Container>
      )}
      {/* {isLoading && <ContentSkeleton />} */}
    </React.Fragment>
  );
}
