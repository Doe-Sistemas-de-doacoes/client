import { render, screen } from '@testing-library/react'

import FinishedModal from '.'

describe('<FinishedModal />', () => {
  it('should render the heading', () => {
    const { container } = render(<FinishedModal />)

    expect(
      screen.getByRole('heading', { name: /FinishedModal/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
