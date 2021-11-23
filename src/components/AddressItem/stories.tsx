import { Story, Meta } from '@storybook/react/types-6-0'

import mock from '../Address/mock'
import AddressItem, { AddressItemProps } from '.'

export default {
  title: 'AddressItem',
  component: AddressItem
} as Meta

export const Default: Story<AddressItemProps> = (args) => (
  <AddressItem {...args} />
)

Default.args = mock[0]
