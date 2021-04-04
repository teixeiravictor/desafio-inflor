import styled from 'styled-components'
import media from 'styled-media-query'

export const PaginationWrapper = styled.nav`
  display: flex;
  justify-content: center;
  padding: 3rem;

  ${media.lessThan('large')`
    padding: 5rem 0;
  `}
`

export const PaginationList = styled.ul`
  align-items: center;
  color: var(--texts);
  display: flex;
  justify-content: space-between;
`

export const PaginationItem = styled.li`
  list-style-type: none;
  margin: 0 0.5rem;
  border-radius: 5px;
  background-color: var(--mediumBackground);
`

export const PaginationLink = styled.a`
  color: var(--texts);
  display: block;
  text-decoration: none;
  transition: background-color 0.3s;
  padding: 0.5rem 0.8rem;
  &:hover {
    color: var(--highlight);
  }
`
