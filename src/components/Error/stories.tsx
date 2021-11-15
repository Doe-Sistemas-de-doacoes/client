import { Story, Meta } from '@storybook/react/types-6-0'
import Error, { ErrorProps } from '.'

export default {
  title: 'Error',
  component: Error
} as Meta

export const Default: Story<ErrorProps> = (args) => <Error {...args} />

Default.args = {
  message: 'Um simples exemplo de uma mensagem de erro'
}
