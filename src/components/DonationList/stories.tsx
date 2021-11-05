import { Story, Meta } from '@storybook/react/types-6-0'
import DonationList from '.'

export default {
  title: 'DonationList',
  component: DonationList
} as Meta

export const Default: Story = () => <DonationList />
