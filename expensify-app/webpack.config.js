const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
    const isProduction = env === "production";
    const CSSExtract = new MiniCssExtractPlugin({ filename: "styles.css" });

    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, "public", "dist"),
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react"
                            ],
                            plugins: ["@babel/plugin-proposal-class-properties"]
                        }
                    }
                },
                {
                    test: /\.s?css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [CSSExtract],
        devServer: {
            contentBase: path.join(__dirname, "public"),
            publicPath: "/dist/",
            historyApiFallback: true
        },
        devtool: isProduction ? "source-map" : "inline-source-map"
    };
};
