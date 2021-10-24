import { render, screen } from '@testing-library/react'

import MyAccount from '.'

describe('<MyAccount />', () => {
  it('should render the heading', () => {
    const { container } = render(<MyAccount />)

    expect(
      screen.getByRole('heading', { name: /MyAccount/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
