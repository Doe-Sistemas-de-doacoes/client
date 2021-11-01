import { render, screen } from 'utils/test-utils'

import FormSignIn from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/signin' }))
}))

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = render(<FormSignIn />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/\*\*\*\*/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    render(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /Esqueceu a sua senha\?/i })
    ).toBeInTheDocument()
  })
})
