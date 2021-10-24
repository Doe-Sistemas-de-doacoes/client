import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Page from '.'

jest.mock('components/Header', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Header"></div>
    }
  }
})

describe('<Page />', () => {
  it('should render the children', () => {
    renderWithTheme(
      <Page>
        <p data-testid="Page Children">Children</p>
      </Page>
    )

    expect(screen.getByTestId('Page Children')).toBeInTheDocument()
  })

  it('should render the header', () => {
    renderWithTheme(
      <Page header>
        <p>Children</p>
      </Page>
    )

    expect(screen.getByTestId('Mock Header')).toBeInTheDocument()
  })
})
