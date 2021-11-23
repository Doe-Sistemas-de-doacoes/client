import { render, screen } from 'utils/test-utils'

import Error from '.'

describe('<Error />', () => {
  it('should render the correctly', () => {
    const { container } = render(
      <Error
        title="A Simple title"
        message="a exemple of simple error message"
      />
    )

    expect(
      screen.getByRole('img', { name: /homem tocando um x vermelho gigante/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /a simple title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/a exemple of simple error message/i))

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the default heading', () => {
    render(<Error message="a exemple of simple error message" />)

    expect(
      screen.getByRole('heading', { name: /Ops... algo deu errado !/i })
    ).toBeInTheDocument()
  })
})
