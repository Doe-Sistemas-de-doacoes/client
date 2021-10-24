import { Story, Meta } from '@storybook/react/types-6-0'

import CardButton, { CardButtonProps } from '.'

export default {
  title: 'CardButton',
  component: CardButton
} as Meta

export const Default: Story<CardButtonProps> = (args) => (
  <CardButton {...args} />
)

Default.args = {
  src: '/img/donation.svg',
  alt: 'Duas mãos enviando um coração vende para cima',
  title: 'Card title',
  message: 'A simple and short message to show in card button.'
}
