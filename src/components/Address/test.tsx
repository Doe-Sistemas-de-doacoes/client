import { renderWithTheme } from 'utils/tests/helpers'

import Address from '.'

describe('<Address />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Address />)

    expect(true).toBeTruthy()

    expect(container.firstChild).toMatchSnapshot()
  })
})
