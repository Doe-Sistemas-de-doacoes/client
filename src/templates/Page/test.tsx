import { render, screen } from '@testing-library/react'

import Page from '.'

describe('<Page />', () => {
  it('should render the heading', () => {
    const { container } = render(<Page />)

    expect(screen.getByRole('heading', { name: /Page/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
