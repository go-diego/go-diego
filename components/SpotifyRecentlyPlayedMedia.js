import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
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

export default function SpotifyRecentlyPlayedMedia(props) {
    const {artist, image, url, track, album, time} = props;
    return (
        <Div>
            <Figure className="image is-4by5 shadow">
                <Img alt={track} src={image} />
            </Figure>
            <a
                target="_blank"
                rel="noopener"
                href={url}
                className="title is-6 is-size-7-mobile is-stretched-link">
                {track}
            </a>
            <p>{artist}</p>
            <small className="is-size-7">{`Last played ${distanceInWordsToNow(
                new Date(time)
            )} ago`}</small>
        </Div>
    );
}
