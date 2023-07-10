const path = require("path"); // * para colocar o caminho de acordo com sistema operacional
const HtmlWebpackPlugin = require("html-webpack-plugin"); // * para nao precisar colocar no index.html a chamada do script da pasta bundle (p nao ter q lidar com possiveis alteracoes do caminho do arquivo) geramos no dist o arquivo html tb q ja chama o arquivo bundle.js
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin"); // *e utilizado para qd tiver alguma alteracao no cod nao zerar todos os estados

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "eval-source-map" : "source-map", // *deixa cod legivel, consigo ver exatamente como cod esta
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"], // *nos arquivos jsx, js qd fizemos uma importacao de outro arquivo nao precisamos botar a extensao dele por conta dessa config
  },
  devServer: {
    static: path.resolve(__dirname, "public"),
    hot: true, // *para funcionar o ReactRefreshWebpackPlugin
  }, // * para automatizar a chamada do webpack qd tiver alguma alteracao
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ].filter(Boolean), // * usando esse filter ele remove valores booleanos,
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              isDevelopment && require.resolve("react-refresh/babel"),
            ].filter(Boolean),
          },
        }, // *para funcionar o ReactRefreshWebpackPlugin
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"], // *config para importar css
      },
    ],
  },
};
