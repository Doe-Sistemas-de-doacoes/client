import { Story, Meta } from '@storybook/react/types-6-0'

import DonationList, { DonationListProps } from '.'
import mock from './mock'

export default {
  title: 'DonationList',
  component: DonationList
} as Meta

export const Default: Story<DonationListProps> = (args) => (
  <DonationList {...args} />
)

Default.args = {
  donations: mock
} as DonationListProps
