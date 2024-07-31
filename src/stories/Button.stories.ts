import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: '버튼 (button)',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const 원본700: Story = {
  args: {
    primary: true,
    label: '작성',
    backgroundColor: 'bg-blue-700',
  },
};
export const 옅게500: Story = {
  args: {
    primary: true,
    label: '작성',
    backgroundColor: 'bg-blue-500',
  },
};
export const 더옅게400: Story = {
  args: {
    primary: true,
    label: '작성',
    backgroundColor: 'bg-blue-400',
  },
};
export const 하늘700: Story = {
  args: {
    primary: true,
    label: '작성',
    backgroundColor: 'bg-sky-700',
  },
};
export const 하늘500: Story = {
  args: {
    primary: true,
    label: '작성',
    backgroundColor: 'bg-sky-500',
  },
};
export const 하늘400: Story = {
  args: {
    primary: true,
    label: '작성',
    backgroundColor: 'bg-sky-400',
  },
};

export const Secondary: Story = {
  args: {
    label: '작성',
  },
};

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: '작성',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: '작성',
//   },
// };

// export const Warning: Story = {
//   args: {
//     primary: true,
//     label: '삭제',
//     backgroundColor: 'bg-rose-500',
//   }
// };