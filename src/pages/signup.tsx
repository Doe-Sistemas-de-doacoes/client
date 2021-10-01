import Auth from 'templates/Auth'
import FormSignUp from 'components/FormSignUp'

export default function SignUp() {
  return (
    <Auth
      title="Bem-vindo"
      subtitle="Vamos criar uma conta para você!"
      redirectText="Já possui uma conta?"
      redirectLinkText="Entrar"
      redirectLink="/signin"
      maxHeight={'48rem'}
    >
      <FormSignUp />
    </Auth>
  )
}
