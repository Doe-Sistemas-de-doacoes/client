import { render } from 'utils/test-utils'

import MyAccount from '.'

jest.mock('templates/Page', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Page">{children}</div>
  }
}))

describe('<MyAccount />', () => {
  it('should render the heading', () => {
    const { container } = render(<MyAccount />)

    expect(true).toBeTruthy()

    expect(container.firstChild).toMatchSnapshot()
  })
})
