import { useState } from 'react'
import { AxiosError } from 'axios'

import api from 'services/api'
import Loader from 'components/Loader'
import DonationItem, { DonationProps } from 'components/DonationItem'
import formatDate from 'utils/format-date'
import handlerError from 'utils/handle-error'
import { useToast } from 'hooks/use-toast'

import * as S from './styles'

export type DonationListProps = {
  editable?: boolean
  items?: DonationProps[]
  byUser?: boolean
  currentUser?: number
}

const DonationList = ({
  editable = false,
  items,
  byUser = false
}: DonationListProps) => {
  const [donations, setDonations] = useState(
    items?.map((donation) => ({
      ...donation,
      date: formatDate(donation.date)
    }))
  )
  const [loading, setLoading] = useState(false)

  const showToast = useToast()

  async function deleteDonation(id: number) {
    setLoading(true)

    try {
      await api.delete(`/donations/${id}`)
      setDonations(donations?.filter((donation) => donation.id !== id))
      showToast({
        message: 'Doação deletada com sucesso!'
      })
    } catch (error) {
      showToast({
        type: 'error',
        title: 'Não foi possivel deletar a doação!',
        message: handlerError(error as AxiosError)
      })
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <S.StateWrapper>
        <Loader />
      </S.StateWrapper>
    )
  }

  if (!donations?.length) {
    return (
      <S.StateWrapper>
        <p>
          {byUser
            ? 'Você ainda não criou nenhuma doação!'
            : 'Nenhuma doação encontrada'}
        </p>
      </S.StateWrapper>
    )
  }

  return (
    <S.Wrapper>
      {donations?.map((donation) => (
        <DonationItem
          editable={editable && donation.status !== 'FINALIZADO'}
          byUser={byUser}
          onDelete={() => deleteDonation(donation.id)}
          key={donation.id}
          {...donation}
        />
      ))}
    </S.Wrapper>
  )
}

export default DonationList
