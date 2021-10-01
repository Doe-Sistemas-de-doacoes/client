import { signInValidate, signUpValidate } from '.'

describe('validations', () => {
  describe('signInValidate()', () => {
    it('should validate empty fields', () => {
      const values = { user: '', password: '' }

      expect(signInValidate(values)).toMatchObject({
        user: 'Digite o seu email.',
        password: 'Digite a sua senha.'
      })
    })

    it('should return invalid user error', () => {
      const values = { user: 'invalid-email', password: '1234' }
      expect(signInValidate(values).email).toMatchInlineSnapshot(`undefined`)
    })
  })

  describe('signUpValidate()', () => {
    it('should validate empty fields', () => {
      const values = { name: '', user: '', password: '' }

      expect(signUpValidate(values)).toMatchObject({
        name: 'Digite o seu nome.',
        user: 'Digite o seu email.',
        password: 'Digite a sua senha.',
        confirm_password: 'Digite a senha novamente.'
      })
    })

    it('should return short name error', () => {
      const values = { name: 'hi', user: '', password: '' }

      expect(signUpValidate(values).name).toBe(
        `O nome precisa ter no mínimo 5 caracteres.`
      )
    })

    it('should return short password error', () => {
      const values = { name: 'allan', user: '', password: '1234' }

      expect(signUpValidate(values).password).toBe(
        `A senha precisa ter no mínimo 6 caracteres.`
      )
    })

    it('should return invalid email error', () => {
      const values = {
        name: 'allan',
        user: 'invalid-email',
        password: ''
      }

      expect(signUpValidate(values).user).toBe(`Email inválido.`)
    })

    it('should return error if password does not match with confirm password', () => {
      const values = {
        name: 'allan',
        user: 'allan@doe.com',
        password: '1234',
        confirm_password: '4321'
      }

      expect(signUpValidate(values).confirm_password).toMatchInlineSnapshot(
        `"As senhas não são iguais."`
      )
    })
  })
})
