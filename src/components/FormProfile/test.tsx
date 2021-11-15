import { render, screen } from 'utils/test-utils'

import mock from './mock'
import FormProfile from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  query: {}
}))

describe('<FormProfile />', () => {
  it('should render the profile form', () => {
    render(<FormProfile {...mock} />)

    expect(
      screen.getByRole('heading', { name: /meus dados/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /nome/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Nova senha/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Confirme a senha/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /salvar/i })).toBeInTheDocument()
  })
})
