import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@brunnosillvar-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/brunnosillvar.png',
    alt: 'Bruno Rodrigues',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
