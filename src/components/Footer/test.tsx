import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(
      screen.getByText(/Doe © 2021, Nenhum direito reservado/i)
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
