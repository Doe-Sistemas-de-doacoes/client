import { DonationListProps } from 'components/DonationList'
import FindTemplate from 'templates/Find'

export default function FindPage(props: DonationListProps) {
  return <FindTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      donations: [
        {
          typeOfDonation: 'Donation type',
          description: 'A simple donation description'
        },
        {
          typeOfDonation: 'Donation type',
          description: 'A simple donation description'
        },
        {
          typeOfDonation: 'Donation type',
          description: 'A simple donation description'
        },
        {
          typeOfDonation: 'Donation type',
          description: 'A simple donation description'
        },
        {
          typeOfDonation: 'Donation type',
          description: 'A simple donation description'
        }
      ]
    } as DonationListProps
  }
}
