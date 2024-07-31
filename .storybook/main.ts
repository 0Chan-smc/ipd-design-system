import type { StorybookConfig } from "@storybook/react-webpack5";

const path = require('path');

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    "@whitespace/storybook-addon-html"
  ],
  webpackFinal: async (config) => {
    (config.module?.rules ?? []).push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: {
                "tailwindcss/nesting": {},
                tailwindcss: {},
                cssnano: {},
                autoprefixer: {},
              },
            },
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });
    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
