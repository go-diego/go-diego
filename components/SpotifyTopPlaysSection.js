import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import SpotifyMedia from "./SpotifyMedia";
import Spotify from "../api/spotify.api";

export default class ProjectsSection extends React.Component {
    state = {
        topPlayedOnSpotify: null
    };

    async componentDidMount() {
        const spotify = new Spotify();
        const refreshTokenrResponse = await spotify.refreshToken();
        const token = refreshTokenrResponse.data.access_token;
        const spotifyData = await spotify.getTopPlayed({
            token
        });
        const topPlayedOnSpotify = spotifyData.items;
        console.log("topPlayedOnSpotify", topPlayedOnSpotify);
        this.setState({topPlayedOnSpotify});
    }

    render() {
        const {topPlayedOnSpotify} = this.state;
        return (
            topPlayedOnSpotify && (
                <Section className="has-background-warning">
                    <SectionTitle title="On Repeat on Spotify" />
                    <div className="columns is-multiline is-mobile">
                        {topPlayedOnSpotify.map(object => {
                            return (
                                <div className="column is-one-fifth-desktop is-half-mobile">
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
