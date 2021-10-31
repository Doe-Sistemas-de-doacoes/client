import Home, { HomeProps } from 'templates/Home'

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      connections: 200
    }
  }
}
