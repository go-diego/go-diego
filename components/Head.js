import NextHead from "next/head";
import {string} from "prop-types";

const defaultDescription = "Hola! I'm Diego. Front-end developer based in Coachella Valley";
const defaultOGURL = "https://godiego.me";
const defaultOGImage = "/static/open-graph.png";

export default function Head(props) {
    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <title>{props.title || ""}</title>
            <meta
                key="description"
                name="description"
                content={props.description || defaultDescription}
            />
            <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
            <link key="icon" rel="icon" sizes="192x192" href="/static/touch-icon.png" />
            <link key="apple_touch_icon" rel="apple-touch-icon" href="/static/touch-icon.png" />
            <link key="mask_icon" rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
            <link key="favicon" href="/static/favicon.ico" rel="icon" type="image/x-icon" />
            <meta key="og_url" property="og:url" content={props.url || defaultOGURL} />
            <meta key="og_title" property="og:title" content={props.title || ""} />
            <meta
                key="og_description"
                property="og:description"
                content={props.description || defaultDescription}
            />
            <meta key="twitter_site" name="twitter:site" content={props.url || defaultOGURL} />
            <meta key="twitter_card" name="twitter:card" content="summary_large_image" />
            <meta
                key="twitter_image"
                name="twitter:image"
                content={props.ogImage || defaultOGImage}
            />
            <meta key="og_image" property="og:image" content={props.ogImage || defaultOGImage} />
            <meta key="og_image_width" property="og:image:width" content="1200" />
            <meta key="og_image_height" property="og:image:height" content="630" />
            <script
                key="fontawesome"
                defer
                src="https://use.fontawesome.com/releases/v5.6.3/js/all.js"
                integrity="sha384-EIHISlAOj4zgYieurP0SdoiBYfGJKkgWedPHH4jCzpCXLmzVsw1ouK59MuUtP4a1"
                crossOrigin="anonymous"
            />
            {props.children}
        </NextHead>
    );
}

Head.propTypes = {
    title: string,
    description: string,
    url: string,
    ogImage: string
};
