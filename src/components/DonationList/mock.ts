import { DonationItemProps } from 'components/DonationItem'
import { AddressProps } from 'services/user'

const address1: AddressProps = {
  city: 'São paulo',
  id: 1,
  neighborhood: 'Jardim Paraiso',
  number: '77',
  region: 'LESTE',
  state: 'SP',
  street: 'Av. Paulista'
}

const address2: AddressProps = {
  city: 'São Paulo',
  id: 2,
  neighborhood: 'Jardim Imperador',
  number: '25',
  region: 'LESTE',
  state: 'SP',
  street: 'Av. 9 de julho'
}

export default [
  {
    id: 1,
    date: '30/10/2021 10:00',
    description: 'A Simple donation description',
    imageSrc: '',
    donor: {
      address: address1,
      id: 1,
      name: 'Joe'
    },
    receiver: {
      address: address2,
      id: 2,
      name: 'Jake'
    },
    isDelivery: true,
    status: 'PENDENTE',
    type: 'Vestuário Feminino'
  },
  {
    id: 2,
    date: '28/10/2021 8:30',
    description: 'A Simple donation description',
    imageSrc: '',
    donor: {
      address: address1,
      id: 2,
      name: 'Jake'
    },
    receiver: {
      address: address2,
      id: 1,
      name: 'Joe'
    },
    isDelivery: false,
    status: 'FINALIZADO',
    type: 'Vestuário masculino'
  },
  {
    id: 1,
    date: '30/10/2021 10:00',
    description: 'A Simple donation description',
    imageSrc: '',
    donor: {
      address: address1,
      id: 1,
      name: 'Joe'
    },
    receiver: {
      address: address2,
      id: 2,
      name: 'Jake'
    },
    isDelivery: true,
    status: 'PENDENTE',
    type: 'Vestuário Feminino'
  },
  {
    id: 2,
    date: '28/10/2021 8:30',
    description: 'A Simple donation description',
    imageSrc: '',
    donor: {
      address: address1,
      id: 2,
      name: 'Jake'
    },
    receiver: {
      address: address2,
      id: 1,
      name: 'Joe'
    },
    isDelivery: false,
    status: 'FINALIZADO',
    type: 'Vestuário masculino'
  },
  {
    id: 1,
    date: '30/10/2021 10:00',
    description: 'A Simple donation description',
    imageSrc: '',
    donor: {
      address: address1,
      id: 1,
      name: 'Joe'
    },
    receiver: {
      address: address2,
      id: 2,
      name: 'Jake'
    },
    isDelivery: true,
    status: 'PENDENTE',
    type: 'Vestuário Feminino'
  },
  {
    id: 2,
    date: '28/10/2021 8:30',
    description: 'A Simple donation description',
    imageSrc: '',
    donor: {
      address: address1,
      id: 2,
      name: 'Jake'
    },
    receiver: {
      address: address2,
      id: 1,
      name: 'Joe'
    },
    isDelivery: false,
    status: 'FINALIZADO',
    type: 'Vestuário masculino'
  },
  {
    id: 1,
    date: '30/10/2021 10:00',
    description: 'A Simple donation description',
    imageSrc: '',
    donor: {
      address: address1,
      id: 1,
      name: 'Joe'
    },
    receiver: {
      address: address2,
      id: 2,
      name: 'Jake'
    },
    isDelivery: true,
    status: 'PENDENTE',
    type: 'Vestuário Feminino'
  },
  {
    id: 2,
    date: '28/10/2021 8:30',
    description: 'A Simple donation description',
    imageSrc: '',
    donor: {
      address: address1,
      id: 2,
      name: 'Jake'
    },
    receiver: {
      address: address2,
      id: 1,
      name: 'Joe'
    },
    isDelivery: false,
    status: 'FINALIZADO',
    type: 'Vestuário masculino'
  }
] as DonationItemProps[]
