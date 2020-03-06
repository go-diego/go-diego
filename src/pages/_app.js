import App from "next/app";
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
    return <Component {...pageProps} />;
  }
}

export default withGoogleAnalytics(process.env.GA_ID, Router)(Site);
