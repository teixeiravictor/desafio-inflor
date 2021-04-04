import { useContext, useState, useEffect } from 'react'
import { AppContext } from 'context/AppContext'

import * as S from './styles'

interface PeopleItemProps {
  name: string
  gender: string
  birth_year: string
  height: string
  mass: string
  hair_color: string
  eye_color: string
  starships: string[]
}

const PeopleItem = (props: PeopleItemProps) => {
  const {
    name,
    gender,
    birth_year,
    height,
    mass,
    hair_color,
    eye_color,
    starships
  } = props

  const [imageUrl, setImageUrl] = useState('')
  const { starshipData } = useContext(AppContext)

  const filteredStarShips = starships.map((url) =>
    starshipData.find((starship) => starship.url === url)
  )

  const mountStarshipItem = filteredStarShips
    .map((starship) => {
      if (starship) return starship.name
    })
    .join(', ')

  const renderStarship = (starship: string[]) => {
    return starship.length !== 0 ? mountStarshipItem : `Don't have`
  }

  async function searchImage(query: string) {
    const URL = `https://thingproxy.freeboard.io/fetch/https://api.qwant.com/api/search/images?count=1&q=${query}&t=images&safesearch=1&locale=pt_BR&uiv=4`
    const response = await fetch(URL, { cache: 'force-cache' })
    const results = await response.json()
    const imageUrl = results.data.result.items.map(
      (item: any) => item.thumbnail
    )

    setImageUrl(imageUrl)
  }

  useEffect(() => {
    searchImage(`${name.replace(/\s+/g, '')}`).catch(console.error)
  }, [])

  return (
    <S.PeopleItem>
      <S.PeopleImage imageUrl={imageUrl} />
      <S.PeopleDescription>
        <S.PeopleName>{name}</S.PeopleName>
        <S.PeopleContent>
          <S.PeopleInfoRow>
            <S.PeopleHighlight>&#128101; {gender}</S.PeopleHighlight>
            <S.PeopleHighlight>&#127881; {birth_year}</S.PeopleHighlight>
          </S.PeopleInfoRow>
          <S.PeopleInfoRow>
            <S.PeopleHighlight>&#128207; {height}cm</S.PeopleHighlight>
            <S.PeopleHighlight> &#9878; {mass}</S.PeopleHighlight>
          </S.PeopleInfoRow>
          <S.PeopleInfoRow>
            <S.PeopleHighlight>&#128065; {eye_color}</S.PeopleHighlight>
            <S.PeopleHighlight>&#128135; {hair_color}</S.PeopleHighlight>
          </S.PeopleInfoRow>
          <S.PeopleInfoRow>
            <S.PeopleHighlight>
              &#128640; {renderStarship(starships)}
            </S.PeopleHighlight>
          </S.PeopleInfoRow>
        </S.PeopleContent>
      </S.PeopleDescription>
    </S.PeopleItem>
  )
}

export default PeopleItem
