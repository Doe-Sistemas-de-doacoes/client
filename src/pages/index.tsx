import Home, { HomeProps } from 'templates/Home'

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    revalidate: 10,
    props: {
      connections: 200
    }
  }
}
