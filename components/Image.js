import React from "react";
import styled from "styled-components";
import ProgressiveImage from "react-progressive-image";
import Loading from "../components/Loading";

const Img = styled.img`
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
`;

const Loader = styled(Loading)`
    height: 100%;
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
`;

export default function Image({src, alt, isLoading, className, loaderColor}) {
    return (
        <React.Fragment>
            {isLoading && <Loader color={loaderColor} />}
            {!isLoading && (
                <ProgressiveImage src={src} placeholder="">
                    {(src, loading) => {
                        return loading ? (
                            <Loader color={loaderColor} />
                        ) : (
                            <Img className={className} src={src} />
                        );
                    }}
                </ProgressiveImage>
            )}
        </React.Fragment>
    );
}
