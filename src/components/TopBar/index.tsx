import { useContext } from 'react'
import { AppContext } from 'context/AppContext'

import * as S from './styles'

const TopBar = () => {
  const { searchTerm, handleSearchTerm } = useContext(AppContext)

  const checkTextInput = (value: string) => {
    const keepSearch = value !== '' ? true : false
    handleSearchTerm(value, keepSearch)
  }

  return (
    <S.Wrapper>
      {searchTerm.length > 0 ? (
        <S.Button onClick={() => handleSearchTerm('', false)}>
          <S.CloseIcon />
        </S.Button>
      ) : null}
      <S.Input
        type="text"
        onChange={(event) => checkTextInput(event.target.value)}
        value={searchTerm}
        placeholder={'Please, input the name of characters...'}
      />
    </S.Wrapper>
  )
}

export default TopBar
