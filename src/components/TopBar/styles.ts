import styled from 'styled-components'
import media from 'styled-media-query'

import { Close } from '@styled-icons/evil/Close'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;

  color: white;
  padding: 4rem 2rem;
  margin: 0 2rem;
  width: 35rem;
  ${media.lessThan('medium')`
    padding: 1rem 1.5rem;
    margin: 3rem 1rem;
  `}
`

export const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;

  border: none;
  border-radius: 0.6rem;

  font-size: 1.25em;
  padding: 0.8rem 1.5rem;
  min-width: 20em;

  :focus {
    border-color: #5eaefe;
    outline: none;
  }
`

export const Button = styled.button`
  height: 32px;
  width: 32px;

  margin: 0 1rem;

  border: none;
  background: transparent;

  cursor: pointer;

  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`

export const CloseIcon = styled(Close)`
  color: var(--white);
`
