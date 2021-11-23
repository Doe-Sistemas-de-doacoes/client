import { render, screen } from 'utils/test-utils'

import Home from '.'

jest.mock('hooks/use-session', () => ({
  useSession: jest.fn(() => {
    return {
      session: {
        user: {
          name: 'Allan'
        }
      },
      loading: false
    }
  })
}))

jest.mock('templates/Page', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Page">{children}</div>
  }
}))

describe('<Home />', () => {
  it('should render correctly', () => {
    const { container } = render(<Home connections={200} />)

    expect(screen.getByRole('heading', { name: /Doe/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Conectando pessoas/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Olá, Allan/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/200 pessoas conectadas/i)).toBeInTheDocument()

    expect(screen.getByTestId('Mock Page')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
