import { render, screen } from 'utils/test-utils'

import Page from '.'

jest.mock('next-auth/client', () => ({
  useSession: jest.fn(() => {
    return [{ session: null }]
  })
}))

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

describe('<Page />', () => {
  it('should render the children', () => {
    render(
      <Page>
        <p data-testid="Page Children">Children</p>
      </Page>
    )

    expect(screen.getByTestId('Page Children')).toBeInTheDocument()
  })

  it('should render the header', () => {
    render(
      <Page header>
        <p>Children</p>
      </Page>
    )

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
  })
})
