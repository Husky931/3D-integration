const path = require("path");
module.exports = (env, argv) => ({
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(ts|tsx|jsx|js)$/i,
            exclude: [/webpack/, /babel/, /core-js/],
            use: [
              {
                loader: "babel-loader",
                options: {
                  babelrc: false,
                  presets: [
                    [
                      "@babel/preset-env",
                      {
                        useBuiltIns: "usage",
                        corejs: "core-js@3",
                        targets: {
                          chrome: "49",
                        },
                      },
                    ],
                    "@babel/preset-react",
                    "@babel/preset-typescript",
                  ],
                  sourceType: "unambiguous",
                },
              },
            ],
          },
          {
            test: /\.css$/i,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1,
                  modules: true,
                },
              },
              {
                loader: "postcss-loader",
                options: {
                  postcssOptions: {
                    plugins: [require("tailwindcss"), require("autoprefixer")],
                  },
                },
              },
            ],
            include: /\.module.css$/i,
          },
          {
            test: /\.css$/i,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: "postcss-loader",
                options: {
                  postcssOptions: {
                    plugins: [require("tailwindcss"), require("autoprefixer")],
                  },
                },
              },
            ],
          },
          {
            type: "asset/resource",
            exclude: [/.(js|mjs|jsx|ts|tsx)$/, /.json$/],
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
    fallback: {
      fs: false,
      assert: false,
      os: require.resolve("os-browserify/browser"),
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      zlib: require.resolve("browserify-zlib"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      crypto: require.resolve("crypto-browserify"),
      buffer: require.resolve("buffer/"),
      util: require.resolve("util/"),
    },
  },
  plugins: [
    new (require("html-webpack-plugin"))({
      meta: {
        viewport:
          "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no",
      },
      templateContent:
        '<head><title>Lingo3D - 低代码元宇宙引擎</title></head><body><div id="app"></div></body>',
    }),
    new (require("webpack-notifier"))({ alwaysNotify: true }),
  ],
  experiments: {
    asyncWebAssembly: true,
  },
  optimization: {
    minimizer: [
      new (require("terser-webpack-plugin"))({
        terserOptions: {
          safari10: true,
        },
      }),
    ],
  },
  mode: "development",
  stats: "minimal",
  devtool: argv.mode === "production" ? undefined : "eval-cheap-source-map",
  devServer: {
    compress: true,
    open: true,
    host: "localhost",
    port: 3001,
    https: false,
    hot: true,
  },
});
