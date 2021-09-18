import { Lock, Mail } from 'react-feather'

import Button from 'components/Button'
import Input from 'components/Input'

import * as S from './styles'

const FormSignIn = () => (
  <>
    <S.FieldsWrapper>
      <Input
        name="email"
        label="Email"
        placeholder="Ex: joao.silva@email.com"
        type="email"
        icon={<Mail />}
      />
      <Input
        name="password"
        label="Senha"
        placeholder="****"
        type="password"
        icon={<Lock />}
      />
      <S.ForgotPassword>Esqueceu sua senha?</S.ForgotPassword>
    </S.FieldsWrapper>

    <Button fullWidth>Entrar</Button>
  </>
)

export default FormSignIn
