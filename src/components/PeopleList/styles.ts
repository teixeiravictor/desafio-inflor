import styled from 'styled-components'
import media from 'styled-media-query'

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 4rem 2rem;
  margin: 0 auto;
  width: 35rem;
`

export const MessageTitle = styled.h1`
  color: var(--texts);
  font-size: 2rem;
`

export const MessageSubTitle = styled.h2`
  color: var(--texts);
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 400;
`

export const MessageBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0;
`

export const Icon = styled.div`
  width: 4rem;

  ${media.lessThan('medium')`
      width: 1rem;
    `}

  svg {
    fill: var(--texts);
  }
`

export const PeopleListWrapper = styled.section`
  width: 80%;
  max-width: 900px;
`

export const PeopleList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(143px, max-content));
  grid-auto-rows: auto;
  grid-gap: 1.5rem;
  justify-content: center;

  ${media.lessThan('small')`
    grid-template-columns: 1fr 1fr;
  `}
`

export const Spinner = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--highlight);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`
