import React from 'react';

const FRAME_STYLE = {
  border: '1px solid #aaa',
};

/**
 * Embeds a Storybook example
 *
 * @prop story The story ID in the URL to navigate to
 */
export default function Example() {
  const url =
    'https://main--6620de02a5e20036aa48cf04.chromatic.com/?path=/docs/example-button--docs';

  return (
    <iframe
      title="Storybook Example"
      allowFullScreen
      src={url}
      frameBorder={0}
      width="100%"
      height="800"
      style={FRAME_STYLE}
    ></iframe>
  );
}
