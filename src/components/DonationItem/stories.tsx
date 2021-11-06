import { Story, Meta } from '@storybook/react/types-6-0'

import Donation, { DonationItemProps } from '.'
import mock from '../DonationList/mock'

export default {
  title: 'Donation',
  component: Donation
} as Meta

export const Default: Story<DonationItemProps> = (args) => (
  <Donation {...args} />
)

Default.args = mock[0]
