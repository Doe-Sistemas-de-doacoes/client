import { render, screen } from '@testing-library/react'

import CardButton from '.'

describe('<CardButton />', () => {
  it('should render the heading', () => {
    const { container } = render(<CardButton />)

    expect(
      screen.getByRole('heading', { name: /CardButton/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
