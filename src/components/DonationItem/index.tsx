import * as S from './styles'

// "datetimeOfCollection": "2021-10-30T03:03:41.248Z",
//  "datetimeOfDelivery": "2021-10-30T03:03:41.248Z",
//     "donor": {
//       "address": [
//         {
//           "city": "string",
//           "id": 0,
//           "neighborhood": "string",
//           "number": 0,
//           "region": "LESTE",
//           "state": "string",
//           "street": "string",
//           "userId": 0
//         }
//       ],
//       "id": 0,
//       "name": "string",
//       "profile": "string",
//       "user": "string"
//     },
//     "id": 0,
//     "receiver": {
//       "address": [
//         {
//           "city": "string",
//           "id": 0,
//           "neighborhood": "string",
//           "number": 0,
//           "region": "LESTE",
//           "state": "string",
//           "street": "string",
//           "userId": 0
//         }
//       ],
//       "id": 0,
//       "name": "string",
//       "profile": "string",
//       "user": "string"
//     },
export type DonationItemProps = {
  description: string
  typeOfDonation: string
}

const DonationItem = ({ description, typeOfDonation }: DonationItemProps) => (
  <S.Wrapper>
    <S.Img />
    <S.Type>{typeOfDonation}</S.Type>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default DonationItem
