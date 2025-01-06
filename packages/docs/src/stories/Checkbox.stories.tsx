import type { Meta, StoryObj } from '@storybook/react'
import {
  StyledBox,
  StyledText,
  Checkbox,
  CheckboxProps,
} from '@brunnosillvar-ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
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
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <StyledText size="sm">Accept terms of use</StyledText>
        </StyledBox>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
