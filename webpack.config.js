import WasmPackPlugin from "@wasm-tool/wasm-pack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, "dist");

export default {
  mode: "production",
  entry: {
    index: path.join(__dirname, "js", "index.js"),
  },
  experiments: {
    asyncWebAssembly: true,
  },
  output: {
    path: dist,
    filename: "[name].js",
  },
  devServer: {
    contentBase: dist,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, "static"),
          to: path.join(__dirname, "dist"),
        },
      ],
    }),

    new WasmPackPlugin({
      crateDirectory: __dirname,
    }),
  ],
};
