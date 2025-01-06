import type { Meta, StoryObj } from '@storybook/react'
import {
  StyledBox,
  StyledText,
  TextInput,
  TextInputProps,
} from '@brunnosillvar-ignite-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  decorators: [
    (Story) => {
      return (
        <StyledBox
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <StyledText size="sm">Email address</StyledText>
          {Story()}
        </StyledBox>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
