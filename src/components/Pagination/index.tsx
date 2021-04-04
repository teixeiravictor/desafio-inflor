import * as S from './styles'

export type PaginationProps = {
  peoplesPerPage: number
  totalPeoples: number
  paginate: (arg: number) => void
}

const Pagination = ({
  peoplesPerPage,
  totalPeoples,
  paginate
}: PaginationProps) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPeoples / peoplesPerPage); i++) {
    pageNumbers.push(i)
  }

  if (pageNumbers.length === 1) return null

  return (
    <S.PaginationWrapper>
      <S.PaginationList>
        {pageNumbers.map((number) => (
          <S.PaginationItem key={number}>
            <S.PaginationLink onClick={() => paginate(number)} href="#">
              {number}
            </S.PaginationLink>
          </S.PaginationItem>
        ))}
      </S.PaginationList>
    </S.PaginationWrapper>
  )
}

export default Pagination
