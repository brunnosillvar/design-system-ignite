import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, StyledText } from '@brunnosillvar-ignite-ui/react'

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
    children: <StyledText>Testando o elemento Box</StyledText>,
  },
  argTypes: {
    control: {
      type: null,
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
