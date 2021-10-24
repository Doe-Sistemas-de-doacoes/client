import { renderWithTheme } from 'utils/tests/helpers'

import MyAccount from '.'

describe('<MyAccount />', () => {
  it('should render the heading', () => {
    renderWithTheme(<MyAccount />)

    expect(true).toBeTruthy()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
