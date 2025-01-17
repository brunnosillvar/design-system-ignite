import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@brunnosillvar-ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  // tags: ['autodocs'],
  args: {
    children: 'Custom Title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as` no CustomTag Story.',
      },
    },
  },
}
