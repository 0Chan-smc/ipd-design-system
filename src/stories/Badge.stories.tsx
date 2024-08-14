import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '../components/@common/Badge';

import { Link } from 'react-feather';

const meta = {
  title: '배지 (Badge)',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: {
    label: 'Naver',
    className: 'bg-green-500 text-gray-50',
  },
};

export const 아이콘: Story = {
  args: {
    label: 'Google',
    icon: <Link className="h-3.5 w-3.5" />,
  },
};
