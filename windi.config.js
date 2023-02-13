// @ts-check - enable TS check for js file
import config from "@slidev/client/windi.config";
import { defineConfig } from "windicss/helpers";

export default defineConfig({
  ...config,
  plugins: [...(config.plugins ?? []), require("@windicss/plugin-animations")],
});
