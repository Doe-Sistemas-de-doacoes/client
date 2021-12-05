import { DonationProps } from 'components/DonationItem'
import { Pagination } from 'services/pagination'
import formatDate from 'utils/format-date'

export default function donationMapper(
  data: Pagination<DonationProps[]>
): Pagination<DonationProps[]> {
  data.content = data.content?.map((donation) => {
    donation.date = formatDate(donation.date)
    return donation
  })

  return data
}
