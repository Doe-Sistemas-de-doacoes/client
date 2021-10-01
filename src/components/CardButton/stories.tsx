import { Story, Meta } from '@storybook/react/types-6-0'
import Logo from 'components/Logo'

import CardButton, { CardButtonProps } from '.'

export default {
  title: 'CardButton',
  component: CardButton
} as Meta

export const Default: Story<CardButtonProps> = (args) => (
  <CardButton {...args} />
)

Default.args = {
  img: <Logo />,
  title: 'Card title',
  message: 'A simple and short message to show in card button.'
}
