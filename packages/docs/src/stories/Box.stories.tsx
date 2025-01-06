import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@brunnosillvar-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    control: {
      type: null,
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
