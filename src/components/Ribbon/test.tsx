import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'
import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    const { container } = render(<Ribbon>Finalizada</Ribbon>)

    expect(screen.getByText(/Finalizada/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with the primary color', () => {
    render(<Ribbon>Finalizada</Ribbon>)

    expect(screen.getByText(/Finalizada/i)).toHaveStyle({
      backgroundColor: theme.colors.primary
    })
  })

  it('should render with the secondary color', () => {
    render(<Ribbon color="secondary">Finalizada</Ribbon>)

    expect(screen.getByText(/Finalizada/i)).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })

  it('should render with the normal size as default', () => {
    render(<Ribbon>Finalizada</Ribbon>)

    expect(screen.getByText(/Finalizada/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render with the small size', () => {
    render(<Ribbon size="small">Finalizada</Ribbon>)

    expect(screen.getByText(/Finalizada/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
