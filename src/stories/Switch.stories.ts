import { fn } from '@storybook/test';

import { Switch } from './Switch';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: '스위치 (checkbox)',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isChecked: { control: 'boolean' },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Switch>

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: {
    size: "default",
    label: '사용 / 종료',
    isChecked: false,
    isDisabled: false,
  },
};
export const 비활성화: Story = {
  args: {
    size: "default",
    label: '사용 / 종료',
    isChecked: false,
    isDisabled: true
  },
};