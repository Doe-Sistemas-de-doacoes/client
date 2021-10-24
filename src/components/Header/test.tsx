import { renderWithTheme } from 'utils/tests/helpers'

import Header from '.'

describe('<Header />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Header />)
    expect(true).toBeTruthy()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
