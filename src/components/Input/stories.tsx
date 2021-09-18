import { Story, Meta } from '@storybook/react/types-6-0'
import { Mail } from 'react-feather'

import Input, { InputProps } from '.'

export default {
  title: 'Input',
  component: Input,
  args: {
    label: 'E-mail',
    name: 'email',
    icon: <Mail />,
    initialValue: '',
    placeholder: 'john.cage@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  }
} as Meta

export const Default: Story<InputProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <Input {...args} />
  </div>
)

export const withError: Story<InputProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <Input {...args} />
  </div>
)

withError.args = {
  error: 'Ops...something is wrong'
}
