import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import SpotifyMedia from "./SpotifyMedia";
import SpotifyRecentlyPlayedMedia from "./SpotifyRecentlyPlayedMedia";
import Spotify from "../api/spotify.api";

export default class SpotifyPlays extends React.Component {
    state = {
        topPlayed: null,
        recentlyPlayed: null
    };

    async componentDidMount() {
        const spotify = new Spotify();
        const refreshTokenrResponse = await spotify.refreshToken();
        const token = refreshTokenrResponse.data.access_token;

        const getTopPlayedResponse = spotify.getTopPlayed({
            token
        });
        const recentlyPlayedResponse = spotify.recentlyPlayed({
            token,
            limit: 5
        });

        const recentlyPlayedData = await recentlyPlayedResponse;
        const recentlyPlayed = recentlyPlayedData.items;
        const topPlayedData = await getTopPlayedResponse;
        const topPlayed = topPlayedData.items;

        console.log("topPlayed", topPlayed);
        console.log("recentlyPlayed", recentlyPlayed);

        this.setState({topPlayed, recentlyPlayed});
    }

    render() {
        const {topPlayed, recentlyPlayed} = this.state;
        return (
            topPlayed && (
                <Section className="has-background-warning">
                    <SectionTitle title="On Spotify" />
                    <p className="heading is-size-6">Recently Played</p>
                    <div className="columns is-multiline is-mobile">
                        {recentlyPlayed.map((object, i) => {
                            return (
                                <div
                                    key={i}
                                    className="column is-one-fifth-tablet is-one-fifth-desktop is-half-mobile">
                                    <SpotifyRecentlyPlayedMedia
                                        track={object.track.name}
                                        album={object.track.album.name}
                                        artist={object.track.artists[0].name}
                                        image={object.track.album.images[0].url}
                                        url={
                                            object.track.album.external_urls
                                                .spotify
                                        }
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <p className="heading is-size-6">Top Plays</p>
                    <div className="columns is-multiline is-mobile">
                        {topPlayed.map((object, i) => {
                            return (
                                <div
                                    key={i}
                                    className="column is-one-fifth-tablet is-one-fifth-desktop is-half-mobile">
                                    <SpotifyMedia
                                        artist={object.name}
                                        image={object.images[0].url}
                                        url={object.external_urls.spotify}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </Section>
            )
        );
    }
}
