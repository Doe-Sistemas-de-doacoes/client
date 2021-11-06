import { Story, Meta } from '@storybook/react/types-6-0'

import Toast, { ToastProps } from '.'
import { ToastError, ToastSuccess } from './mock'

export default {
  title: 'Toast',
  component: Toast
} as Meta

export const Success: Story<ToastProps> = (args) => <Toast {...args} />

Success.args = ToastSuccess

export const Error: Story<ToastProps> = (args) => <Toast {...args} />

Error.args = ToastError
