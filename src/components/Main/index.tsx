import TopBar from 'components/TopBar'
import PeopleList from 'components/PeopleList'

import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Heading>Star Wars</S.Heading>
      <S.Content>A list of people involved with Star Wars 🌠</S.Content>

      <TopBar />
      <PeopleList />
    </S.Wrapper>
  )
}

export default Main
