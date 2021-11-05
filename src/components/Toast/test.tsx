import { render, screen } from 'utils/test-utils'
import Toast from '.'

describe('<Toast />', () => {
  it('should render the heading', () => {
    const { container } = render(<Toast message="Teste message" />)

    expect(screen.getByText(/Teste message/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
