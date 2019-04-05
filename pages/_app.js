import App, {Container} from "next/app";
import Router from "next/router";
import withGoogleAnalytics from "next-ga";
import css from "../styles/site.scss";

class Site extends App {
    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return {pageProps};
    }

    render() {
        const {Component, pageProps} = this.props;
        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        );
    }
}

export default withGoogleAnalytics("UA-116062422-1", Router)(Site);
