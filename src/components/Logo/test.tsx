import { render, screen } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the logo', () => {
    const { container } = render(<Logo />)

    expect(container)
    expect(screen.getByLabelText(/Doe/i)).toBeInTheDocument()
    expect(container.querySelector('#logoText')).not.toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the logo with title', () => {
    const { container } = render(<Logo withTitle />)

    expect(container.querySelector('#logoText')).toBeInTheDocument()
  })

  it('should render the logo when size is xsmall', () => {
    render(<Logo size={'xsmall'} />)

    expect(screen.getByLabelText(/Doe/i).parentElement).toHaveStyleRule(
      'width',
      '4.6rem'
    )
  })

  it('should render the logo when size is small', () => {
    render(<Logo size={'small'} />)

    expect(screen.getByLabelText(/Doe/i).parentElement).toHaveStyleRule(
      'width',
      '5.6rem'
    )
  })

  it('should render the logo when size is normal', () => {
    render(<Logo size={'normal'} />)

    expect(screen.getByLabelText(/Doe/i).parentElement).toHaveStyleRule(
      'width',
      '8rem'
    )
  })

  it('should render the logo when size is large', () => {
    render(<Logo size={'large'} />)

    expect(screen.getByLabelText(/Doe/i).parentElement).toHaveStyleRule(
      'width',
      '14rem'
    )
  })

  it('should render the logo when size is xsmall and has title', () => {
    render(<Logo withTitle size={'xsmall'} />)

    expect(screen.getByLabelText(/Doe/i).parentElement).toHaveStyleRule(
      'width',
      '4.6rem'
    )
  })

  it('should render the logo when size is small and has title', () => {
    render(<Logo withTitle size={'small'} />)

    expect(screen.getByLabelText(/Doe/i).parentElement).toHaveStyleRule(
      'width',
      '5.6rem'
    )
  })

  it('should render the logo when size is normal and has title', () => {
    render(<Logo withTitle size={'normal'} />)

    expect(screen.getByLabelText(/Doe/i).parentElement).toHaveStyleRule(
      'width',
      '12rem'
    )
  })

  it('should render the logo when size is larg and has title', () => {
    render(<Logo withTitle size={'large'} />)

    expect(screen.getByLabelText(/Doe/i).parentElement).toHaveStyleRule(
      'width',
      '14rem'
    )
  })
})
