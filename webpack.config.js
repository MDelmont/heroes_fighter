const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Point d'entrée
  output: {
    filename: "bundle.js", // Nom du fichier de sortie
    path: path.resolve(__dirname, "dist"), // Répertoire de sortie
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Utilise babel-loader pour transpiler JavaScript
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // Chemin vers votre fichier HTML modèle
      // favicon: "src/assets/img/favicon.ico", // Chemin vers votre favicon
    }),
  ],
};
