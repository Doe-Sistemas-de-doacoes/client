import Button from 'components/Button'
import Input from 'components/Input'
import { Lock, Mail, User } from 'react-feather'
import * as S from './styles'

const FormSignUp = () => (
  <S.Wrapper>
      <Input
        name="name"
        label="Nome"
        placeholder="Ex: João Silva"
        type="text"
        icon={<User />}
      />

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

      <Input
        name="password"
        label="Confirmar senha"
        placeholder="****"
        type="password"
        icon={<Lock />}
      />

      <Button>Criar conta</Button>
  </S.Wrapper>
)

export default FormSignUp
