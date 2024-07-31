import type { Preview } from "@storybook/react";
import '../src/css/custom.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    html: {
      prettier: {
        tabWidth: 4,
        useTabs: true,
        htmlWhitespaceSensitivity: "ignore",
      },
    },
  },
};

export default preview;
