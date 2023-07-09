const path = require("path"); // * para colocar o caminho de acordo com sistema operacional

module.exports = {
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"], // nos arquivos jsx, js qd fizemos uma importacao de outro arquivo nao precisamos botar a extensao dele por conta dessa config
  },
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
