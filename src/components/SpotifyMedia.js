import styled from "styled-components";

const Figure = styled.figure`
    overflow: hidden;
    -moz-border-radius: 8px;
    border-radius: 8px;
`;

const Img = styled.img`
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
`;

const Div = styled.div`
    position: relative;
`;

export default function SpotifyMedia(props) {
    const {artist, image, url} = props;
    return (
        <Div>
            <Figure className="image is-4by5 shadow">
                <Img alt={artist} src={image} />
            </Figure>
            <a
                target="_blank"
                rel="noopener"
                href={url}
                className="title is-size-6 is-stretched-link">
                {artist}
            </a>
        </Div>
    );
}
