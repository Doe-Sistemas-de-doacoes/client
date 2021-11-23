import Modal, { ModalProps } from 'components/Modal'

import * as S from './styles'

export type FinishedModalProps = {
  message: string
} & ModalProps

const FinishedModal = ({ title, message, ...props }: ModalProps) => (
  <Modal
    {...props}
    title="Tudo pronto!"
    action={{
      primary: {
        children: 'Fehcar'
      }
    }}
  >
    <S.Wrapper>
      <img
        src="/img/super-thank-you.svg"
        alt="Garota segurando dois corações"
      />
      <S.Section>
        <h3>{title}</h3>
        <p>{message}</p>
      </S.Section>
    </S.Wrapper>
  </Modal>
)

export default FinishedModal
