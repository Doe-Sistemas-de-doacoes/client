import { Story, Meta } from '@storybook/react/types-6-0'

import Address, { AddressComponentProps } from '.'
import mock from './mock'

export default {
  title: 'Address',
  component: Address
} as Meta

export const Default: Story<AddressComponentProps> = (args) => (
  <Address {...args} />
)

Default.args = {
  items: mock
}
