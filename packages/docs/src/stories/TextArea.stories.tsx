import type { Meta, StoryObj } from '@storybook/react'
import {
  StyledBox,
  StyledText,
  TextArea,
  TextAreaProps,
} from '@brunnosillvar-ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
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
          <StyledText size="sm">Observations</StyledText>
          {Story()}
        </StyledBox>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
