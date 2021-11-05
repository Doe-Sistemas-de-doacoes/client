import { Story, Meta } from '@storybook/react/types-6-0'
import Donation from '.'

export default {
  title: 'Donation',
  component: Donation
} as Meta

export const Default: Story = () => <Donation />
