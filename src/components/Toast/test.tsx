import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'
import Toast from '.'
import { ToastWrapper } from './styles'

describe('<Toast />', () => {
  it('should render the success toast', () => {
    render(<Toast type="success" message="A simple success message" />)
    expect(screen.getByText(/A simple success message/i)).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveStyle({
      color: theme.colors.primary
    })
  })

  it('should render the success toast by default', () => {
    render(<Toast message="A simple success message" />)
    expect(screen.getByRole('img')).toHaveStyle({
      color: theme.colors.primary
    })
  })

  it('should render the error toast', () => {
    render(<Toast type="error" message="A simple error message" />)
    expect(screen.getByText(/A simple error message/i)).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveStyle({
      color: theme.colors.red
    })
  })

  it('should render the informative toast', () => {
    render(<Toast type="informative" message="A simple info message" />)
    expect(screen.getByText(/A simple info message/i)).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveStyle({
      color: theme.colors.lightGray
    })
  })

  it('should render the informative toast', () => {
    render(
      <ToastWrapper data-testid="wrapper">
        <Toast type="informative" message="A simple info message" />
      </ToastWrapper>
    )
    expect(screen.getByTestId('wrapper')).toBeInTheDocument()
  })

  it('should render the toast hidding', () => {
    render(<Toast type="informative" hiding message="A simple info message" />)
    expect(screen.getByRole('img')).toHaveStyle({
      color: theme.colors.lightGray
    })
  })
})
