import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignUp />)

    expect(screen.getByPlaceholderText('Ex: João Silva')).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Ex: joao.silva@email.com')
    ).toBeInTheDocument()
    expect(screen.queryAllByPlaceholderText('****')).toHaveLength(2)

    expect(
      screen.getByRole('button', { name: /Criar conta/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
