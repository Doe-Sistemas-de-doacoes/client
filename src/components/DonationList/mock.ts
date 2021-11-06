import { DonationItemProps } from 'components/DonationItem'

export default [
  {
    datetimeOfCollection: '2021-10-30T03:03:41.248Z',
    datetimeOfDelivery: '2021-10-30T03:03:41.248Z',
    description: 'A Simple donation description',
    donor: {
      address: [
        {
          city: 'São paulo',
          id: 1,
          neighborhood: 'Jardim Paraiso',
          number: 77,
          region: 'LESTE',
          state: 'SP',
          street: 'Av. Paulista',
          userId: 1
        }
      ],
      id: 1,
      name: 'Joe',
      profile: 'undefined',
      user: 'joe@doe.com'
    },
    id: 1,
    receiver: {
      address: [
        {
          city: 'São Paulo',
          id: 2,
          neighborhood: 'Jardim Imperador',
          number: 25,
          region: 'LESTE',
          state: 'SP',
          street: 'Av. 9 de julho',
          userId: 2
        }
      ],
      id: 2,
      name: 'Jake',
      profile: 'string',
      user: 'jake@doe.com'
    },
    typeOfDonation: 'Vestuário Feminino'
  },
  {
    datetimeOfCollection: '2021-10-28T03:03:41.248Z',
    datetimeOfDelivery: '2021-10-28T03:03:41.248Z',
    description: 'A Simple donation description',
    donor: {
      address: [
        {
          city: 'São paulo',
          id: 1,
          neighborhood: 'Jardim Paraiso',
          number: 77,
          region: 'LESTE',
          state: 'SP',
          street: 'Av. Paulista',
          userId: 1
        }
      ],
      id: 2,
      name: 'Jake',
      profile: 'string',
      user: 'jake@doe.com'
    },
    id: 1,
    receiver: {
      address: [
        {
          city: 'São Paulo',
          id: 2,
          neighborhood: 'Jardim Imperador',
          number: 25,
          region: 'LESTE',
          state: 'SP',
          street: 'Av. 9 de julho',
          userId: 2
        }
      ],
      id: 1,
      name: 'Joe',
      profile: 'undefined',
      user: 'joe@doe.com'
    },
    typeOfDonation: 'Vestuário Feminino'
  }
] as DonationItemProps[]
