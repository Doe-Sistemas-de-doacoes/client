import { render, screen } from '@testing-library/react'

import Address from '.'

describe('<Address />', () => {
  it('should render the heading', () => {
    const { container } = render(<Address />)

    expect(
      screen.getByRole('heading', { name: /Address/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
