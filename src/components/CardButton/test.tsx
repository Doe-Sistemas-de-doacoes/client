import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardButton from '.'

describe('<CardButton />', () => {
  it('should render the title', () => {
    renderWithTheme(<CardButton title="A simple title" />)

    expect(
      screen.getByRole('heading', { name: /A simple title/i })
    ).toBeInTheDocument()
  })

  it('should render the message', () => {
    renderWithTheme(<CardButton message="A simple message" />)

    expect(screen.getByText(/A simple message/i)).toBeInTheDocument()
  })

  it('should render the image', () => {
    renderWithTheme(
      <CardButton src="/img/donation.svg" alt="A simple alternative text" />
    )

    expect(
      screen.getByRole('img', { name: 'A simple alternative text' })
    ).toHaveAttribute('src', '/img/donation.svg')

    expect(
      screen.getByRole('img', { name: 'A simple alternative text' })
    ).toHaveStyleRule('width', '10rem')
  })

  it('should render correcly with small size', () => {
    renderWithTheme(
      <CardButton
        src="/img/donation.svg"
        size="small"
        alt="A simple alternative text"
      />
    )

    expect(
      screen.getByRole('img', { name: 'A simple alternative text' })
    ).toHaveStyleRule('width', '4rem')
  })

  it('should render CardButton as a link', () => {
    renderWithTheme(
      <CardButton as="a" href="/link" data-testid="Card Button" />
    )

    expect(screen.getByTestId('Card Button')).toHaveAttribute('href', '/link')
  })

  it('should render the CardButton children', () => {
    renderWithTheme(
      <CardButton as="a" href="/link">
        <p data-testid="Children"></p>
      </CardButton>
    )

    expect(screen.getByTestId('Children')).toBeInTheDocument()
  })
})
