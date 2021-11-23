import Joi from 'joi'

const userFieldsValidations = {
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

const addressFieldsValidations = {
  city: Joi.string().required().messages({
    'string.empty': 'Digite a cidade.'
  }),
  neighborhood: Joi.string().required().messages({
    'string.empty': 'Digite o bairro.'
  }),
  number: Joi.string().required().messages({
    'string.empty': 'Digite o número.'
  }),
  state: Joi.string().required().messages({
    'string.empty': 'Digite o estado.'
  }),
  street: Joi.string().required().messages({
    'string.empty': 'Digite a rua.'
  })
}

const donatinsFieldsValidations = {
  type: Joi.string().required().messages({
    'string.empty': 'Digite o tipo da doação.'
  }),
  description: Joi.string().required().messages({
    'string.empty': 'Digite a descrição da doação.'
  }),
  phone: Joi.string().required().messages({
    'string.empty': 'Digite um celular para contato.'
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Digite um email para contato.',
      'string.email': 'Email inválido.'
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

type SignUpProps = {
  name?: string
  username?: string
  password?: string
  confirm_password?: string
}

export function signUpValidate(values: SignUpProps) {
  const { email: user, ...validations } = userFieldsValidations
  const schema = Joi.object({ user, ...validations })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type SignInProps = {
  username?: string
  password?: string
}

export function signInValidate(values: SignInProps) {
  const { email: username, password } = userFieldsValidations
  const schema = Joi.object({ username, password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type EditUserProps = {
  name?: string
  password?: string
  confirm_password?: string
}

export function editUserValidate(values: EditUserProps) {
  const { name, password, confirm_password } = userFieldsValidations

  const schema = Joi.object({
    name,
    ...(values?.password?.trim().length ? { password, confirm_password } : {})
  })

  return getFieldErrors(
    schema.validate(
      {
        name: values.name,
        ...(values.password
          ? {
              password: values.password,
              confirm_password: values.confirm_password
            }
          : {})
      },
      { abortEarly: false }
    )
  )
}

type AddressProps = {
  city: string
  neighborhood: string
  number: string
  state: string
  street: string
}

export function addressValidate(values: AddressProps) {
  const schema = Joi.object(addressFieldsValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type DonationValidationProps = {
  type: string
  description: string
  phone: string
  email: string
}

export function donationValidate(values: DonationValidationProps) {
  const schema = Joi.object(donatinsFieldsValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
