import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

const Props = {
  title: 'Auth simple title',
  redirectText: 'Redirect text',
  redirectLink: '/link',
  redirectLinkText: 'Redirect link text',
  maxHeight: '50vh'
}

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})

describe('<Auth />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <Auth {...Props}>
        <p data-testid="authChildren">Children</p>
      </Auth>
    )

    expect(
      screen.getByRole('heading', { name: /Auth simple title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/Redirect text/i)).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /Redirect link text/i })
    ).toHaveAttribute('href', '/link')

    expect(screen.getByTestId('authChildren')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the subtitle', () => {
    renderWithTheme(
      <Auth {...Props} subtitle="A simple subtitle">
        <p data-testid="authChildren">Children</p>
      </Auth>
    )

    expect(
      screen.getByRole('heading', { name: /A simple subtitle/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('authChildren')).toBeInTheDocument()
  })
})
