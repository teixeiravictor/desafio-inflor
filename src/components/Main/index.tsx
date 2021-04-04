import TopBar from 'components/TopBar'

import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Heading>Star Wars</S.Heading>
      <S.Content>A list of people involved with Star Wars 🌠</S.Content>

      <TopBar />
    </S.Wrapper>
  )
}

export default Main
