import Joi from 'joi'

const fieldsValidations = {
  name: Joi.string().min(5).required().messages({
    'string.empty': 'Digite o seu nome.',
    'string.min': 'O nome precisa ter no mínimo 5 caracteres.'
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Digite o seu email.',
      'string.email': 'Email inválido.'
    }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'A senha precisa ter no mínimo 6 caracteres.',
    'string.empty': 'Digite a sua senha.'
  }),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.required': 'Digite a senha novamente.',
      'any.only': 'As senhas não são iguais.'
    })
}

export type FieldErrors = {
  [key: string]: string
}

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

type SignInProps = {
  username?: string
  password?: string
}

type SignUpProps = {
  name?: string
  username?: string
  password?: string
  confirm_password?: string
}

export function signUpValidate(values: SignUpProps) {
  const { email: user, ...validations } = fieldsValidations
  const schema = Joi.object({ user, ...validations })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export function signInValidate(values: SignInProps) {
  const { email: username, password } = fieldsValidations
  const schema = Joi.object({ username, password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
