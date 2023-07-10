const path = require("path"); // * para colocar o caminho de acordo com sistema operacional
const HtmlWebpackPlugin = require("html-webpack-plugin"); // * para nao precisar colocar no index.html a chamada do script da pasta bundle (p nao ter q lidar com possiveis alteracoes do caminho do arquivo) geramos no dist o arquivo html tb q ja chama o arquivo bundle.js
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"], // nos arquivos jsx, js qd fizemos uma importacao de outro arquivo nao precisamos botar a extensao dele por conta dessa config
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader", // intregracao entre o babel e o webpack
      },
    ],
  },
};
