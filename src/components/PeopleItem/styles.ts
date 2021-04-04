import styled from 'styled-components'
import media from 'styled-media-query'

export const PeopleDescription = styled.div`
  background-color: #fafafc;
  height: 15em;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 0.5em 1em;
  text-align: center;
  overflow: auto;

  & {
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background: var(--white);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--scrollbar);
    }
  }
`

export const PeopleImage = styled.div<{ imageUrl: string }>`
  height: 7em;
  width: 100%;
  padding: 1em 2em;
  position: absolute;
  top: 0;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-image: url(${(props) => (props.imageUrl.length !== 0 ? props.imageUrl : 'img/not-found-people.jpg')});
  background-size: cover;
  background-repeat: no-repeat;

  ${media.lessThan('medium')`
    height: 10em;
  `}

  ${media.greaterThan('medium')`
    &:hover ~ ${PeopleDescription} {
      height: 0em;
      padding: 0px 1em;
    }

    &:hover {
      height: 100%;
    }
  `}
`

export const PeopleName = styled.h2`
  color: var(--black);
  font-size: 1.7rem;
`
export const PeopleContent = styled.div``

export const PeopleHighlight = styled.span`
  display: flex;
  font-size: 1rem;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  width: 100%;
`

export const PeopleInfoRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin: 5px 0;
`

export const PeopleItem = styled.li`
  height: 22em;
  width: 15em;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 10px 10px 25px var(--mediumBackground),
    -10px -10px 25px var(--background);

  ${media.lessThan('medium')`
    height: 25em;
  `}
`
