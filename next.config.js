const {PHASE_PRODUCTION_SERVER} =
    process.env.NODE_ENV === "development"
        ? {} // We're never in "production server" phase when in development mode
        : !process.env.NOW_REGION
        ? require("next/constants") // Get values from `next` package when building locally
        : require("next-server/constants"); // Get values from `next-server` package when building on now v2

const nextConfig = {
    webpack: config => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: "empty"
        };

        config.module.rules = config.module.rules.map(rule => {
            if (rule.loader === "babel-loader") {
                rule.options.cacheDirectory = false;
            }
            return rule;
        });
        return config;
    },
    exportPathMap: async function(defaultPathMap, {dev, dir, outDir, distDir, buildId}) {
        if (dev) {
            console.log("defaultPathMap", defaultPathMap);
            return defaultPathMap;
        }
        return defaultPathMap;
    }
};

module.exports = (phase, {defaultConfig}) => {
    if (phase === PHASE_PRODUCTION_SERVER) {
        return {};
    }

    const withImages = require("next-images");
    const withSass = require("@zeit/next-sass");
    const {withPlugins} = require("next-compose-plugins");

    return withPlugins([[withSass], [withImages]], nextConfig)(phase, defaultConfig);
};
