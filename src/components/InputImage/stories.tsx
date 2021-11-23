import { Story, Meta } from '@storybook/react/types-6-0'
import InputImage, { InputImageProps } from '.'

export default {
  title: 'InputImage',
  component: InputImage
} as Meta

export const Default: Story<InputImageProps> = (args) => (
  <InputImage {...args} />
)

Default.args = {
  name: 'teste',
  message: 'Message'
}
