import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the logo', () => {
    const { container } = renderWithTheme(<Logo />)

    expect(container)
    expect(screen.getByLabelText(/Doe/i)).toBeInTheDocument()
    expect(container.querySelector('#logoText')).not.toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the logo with title', () => {
    const { container } = renderWithTheme(<Logo withTitle />)

    expect(container.querySelector('#logoText')).toBeInTheDocument()
  })

  it('should render the logo when size is xsmall', () => {
    renderWithTheme(<Logo size={'xsmall'} />)

    expect(screen.getByLabelText(/Doe/i).parentElement).toHaveStyleRule(
      'width',
      '4.6rem'
    )
  })

  it('should render the logo when size is small', () => {
    renderWithTheme(<Logo size={'small'} />)

    expect(screen.getByLabelText(/Doe/i).parentElement).toHaveStyleRule(
      'width',
      '5.6rem'
    )
  })

  it('should render the logo when size is normal', () => {
    renderWithTheme(<Logo size={'normal'} />)

    expect(screen.getByLabelText(/Doe/i).parentElement).toHaveStyleRule(
      'width',
      '8rem'
    )
  })

  it('should render the logo when size is large', () => {
    renderWithTheme(<Logo size={'large'} />)

    expect(screen.getByLabelText(/Doe/i).parentElement).toHaveStyleRule(
      'width',
      '14rem'
    )
  })

  it('should render the logo when size is xsmall and has title', () => {
    renderWithTheme(<Logo withTitle size={'xsmall'} />)

    expect(screen.getByLabelText(/Doe/i).parentElement).toHaveStyleRule(
      'width',
      '4.6rem'
    )
  })

  it('should render the logo when size is small and has title', () => {
    renderWithTheme(<Logo withTitle size={'small'} />)

    expect(screen.getByLabelText(/Doe/i).parentElement).toHaveStyleRule(
      'width',
      '5.6rem'
    )
  })

  it('should render the logo when size is normal and has title', () => {
    renderWithTheme(<Logo withTitle size={'normal'} />)

    expect(screen.getByLabelText(/Doe/i).parentElement).toHaveStyleRule(
      'width',
      '10rem'
    )
  })

  it('should render the logo when size is larg and has title', () => {
    renderWithTheme(<Logo withTitle size={'large'} />)

    expect(screen.getByLabelText(/Doe/i).parentElement).toHaveStyleRule(
      'width',
      '14rem'
    )
  })
})
