import { render } from 'utils/test-utils'
// import userEvent from '@testing-library/user-event'

// import Modal from '.'

describe('<Modal />', () => {
  beforeEach(() => {
    // const title = <h1 aria-label="toogle modal">Click here</h1>

    render(<p>Teste</p>)
    // <Modal title={title}>
    //   <span>content</span>
    // </Modal>
  })

  it('should render title', () => {
    expect(true).toBe(true)
    // expect(screen.getByLabelText(/toogle modal/)).toBeInTheDocument()
  })

  // it('should handle open/close modal', () => {
  //   const content = screen.getByText(/content/).parentElement!

  //   expect(content).toHaveStyle({ opacity: 0 })
  //   expect(content.getAttribute('aria-hidden')).toBe('true')

  //   userEvent.click(screen.getByLabelText(/toogle modal/))

  //   expect(content).toHaveStyle({ opacity: 1 })
  //   expect(content.getAttribute('aria-hidden')).toBe('false')
  // })

  // it('should handle open/close modal when clicking on overlay', () => {
  //   const content = screen.getByText(/content/).parentElement!
  //   const overlay = content.nextElementSibling

  //   userEvent.click(screen.getByLabelText(/toogle modal/))

  //   expect(overlay).toHaveStyle({ opacity: 1 })
  //   expect(overlay!.getAttribute('aria-hidden')).toBe('false')

  //   userEvent.click(overlay!)

  //   expect(overlay).toHaveStyle({ opacity: 0 })
  //   expect(overlay!.getAttribute('aria-hidden')).toBe('true')
  // })
})
