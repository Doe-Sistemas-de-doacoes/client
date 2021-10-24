import { Story, Meta } from '@storybook/react/types-6-0'
import MyAccount from '.'

export default {
  title: 'MyAccount',
  component: MyAccount
} as Meta

export const Default: Story = () => <MyAccount />
