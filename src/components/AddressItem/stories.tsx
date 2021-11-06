import { Story, Meta } from '@storybook/react/types-6-0'

import AddressItem, { AddressItemProps } from '.'
import mock from '../Address/mock'

export default {
  title: 'AddressItem',
  component: AddressItem
} as Meta

export const Default: Story<AddressItemProps> = (args) => (
  <AddressItem {...args} />
)

Default.args = mock[0]
