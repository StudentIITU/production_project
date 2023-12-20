import {BuildOptions} from "./types/config";
import {BuildPlugins} from "./BuldPlugins";
import {BuildLoaders} from "./BuildLoaders";
import {BuildResolvers} from "./BuildResolvers";
import webpack from "webpack";
import {BuildDevServer} from "./BuildDevServer";


export function BuildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: BuildPlugins(options),
        module: {
            rules: BuildLoaders(options),
        },
        resolve: BuildResolvers(),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ?  BuildDevServer(options) :  undefined


    }
}