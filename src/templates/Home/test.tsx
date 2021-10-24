import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

describe('<Home />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Home connections={200} />)

    expect(screen.getByRole('heading', { name: /Doe/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Conectando pessoas/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Olá, Allan/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/200 pessoas conectadas/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
