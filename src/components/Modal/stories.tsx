import { Story, Meta } from '@storybook/react/types-6-0'
import Menu, { ModalProps } from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story<ModalProps> = (args) => <Menu {...args} />

Default.args = {
  title: 'Click here',
  children: 'Content'
}
