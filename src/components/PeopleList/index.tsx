import { useContext, useState } from 'react'
import { AppContext } from 'context/AppContext'

import PeopleItem from 'components/PeopleItem'
import Pagination from 'components/Pagination'

import DarthVader from 'assets/svg/icon-darth-vader.svg'

import * as S from './styles'

const PeopleList = () => {
  const [peoplesPerPage] = useState(10)

  const { peoples, loading, totalPeople } = useContext(AppContext)
  const { handleCurrentPage } = useContext(AppContext)

  const paginate = (pageNumber: number) => handleCurrentPage(pageNumber)

  if (loading) {
    return <S.Spinner />
  }

  return (
    <S.PeopleListWrapper>
      {peoples.length > 0 ? (
        <>
          <S.PeopleList>
            {peoples.map((people, index) => {
              return (
                <PeopleItem
                  key={index}
                  name={people.name}
                  gender={people.gender}
                  birth_year={people.birth_year}
                  height={people.height}
                  mass={people.mass}
                  hair_color={people.hair_color}
                  eye_color={people.eye_color}
                  starships={people.starships}
                />
              )
            })}
          </S.PeopleList>
          <Pagination
            peoplesPerPage={peoplesPerPage}
            totalPeoples={totalPeople}
            paginate={paginate}
          />
        </>
      ) : (
        <S.MessageWrapper>
          <S.MessageTitle>Ops! No results...</S.MessageTitle>
          <S.MessageBox>
            <S.Icon>
              <DarthVader />
            </S.Icon>
            <S.MessageSubTitle>
              I find your lack of navigation disturbing
            </S.MessageSubTitle>
          </S.MessageBox>
        </S.MessageWrapper>
      )}
    </S.PeopleListWrapper>
  )
}

export default PeopleList
