import ScentsList from '@components/ScentsList'
import useScents from './hooks/useScents'
import * as Styled from './ScentsPage.styles'

const ScentsPage = () => {
  const scents = useScents()

  if (!scents) return null

  return (
    <>
      <Styled.Heading>Our Scents</Styled.Heading>
      <ScentsList scents={scents} />
    </>
  )
}

export default ScentsPage
