import { useRouter } from 'next/router'

import { ErrorProps } from 'components/Error'
import ProfileMenu from 'components/ProfileMenu'
import Page from 'templates/Page'

import * as S from './styles'

export type ProfileTemplateProps = {
  title: string
  children: React.ReactNode
  error?: ErrorProps
}

const Profile = ({ title, children, error }: ProfileTemplateProps) => {
  const { asPath } = useRouter()

  return (
    <Page title="Minha conta" footer header decoration="corners" error={error}>
      <S.Main>
        <ProfileMenu activeLink={asPath} />
        <S.Content>
          <h4>{title}</h4>
          {children}
        </S.Content>
      </S.Main>
    </Page>
  )
}

export default Profile
