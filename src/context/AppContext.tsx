import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState
} from 'react'

interface PeopleData {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: number
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  url: number
}

interface StarshipData {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  hyperdrive_rating: string
  MGLT: string
  starship_class: string
  pilots: string[]
  films: string[]
  url: string
}

interface AppContextData {
  peopleData: PeopleData[]
  peoples: PeopleData[]
  starshipData: StarshipData[]
  searchTerm: string
  handleSearchTerm: (arg1: string, arg2: boolean) => void
  loading: boolean
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  handleCurrentPage: (arg: number) => void
  totalPeople: number
}

interface AppProviderProps {
  children: ReactNode
}

export const AppContext = createContext({} as AppContextData)

export function AppProvider({ children }: AppProviderProps) {
  const [peopleData, setPeopleData] = useState<PeopleData[]>([])
  const [starshipData, setStarshipData] = useState<StarshipData[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPeople, setTotalPeople] = useState(0)
  const [keepSearch, setKeepSearch] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSearchTerm = (term: string, keepSearch: boolean) => {
    setSearchTerm(term)
    setKeepSearch(keepSearch)
    getPeopleData('search', term)
  }

  const handleCurrentPage = (pageNumber: number) => {
    if (keepSearch) {
      getPeopleData(`search=${searchTerm}&page`, pageNumber)
    } else {
      getPeopleData('page', pageNumber)
    }
  }

  const peoples = peopleData.filter((people) =>
    people.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortingField = 'name'
  peopleData.sort((a, b) => {
    if (a[sortingField] < b[sortingField]) {
      return -1
    }
    if (a[sortingField] > b[sortingField]) {
      return 1
    }
    return 0
  })

  async function getPeopleData(query: string, value: any) {
    const URL = `https://swapi.dev/api/people/?${query}=${value}`
    setLoading(true)
    const response = await fetch(URL)
    const data = await response.json()
    setPeopleData(data.results)
    setTotalPeople(data.count)
    setLoading(false)
  }

  async function getStarShipsData(URL: string, collection = []) {
    const response = await fetch(URL)
    const data = await response.json()
    collection = [...collection, ...data.results] as any

    if (data.next !== null) getStarShipsData(data.next, collection)
    if (data.next === null) setStarshipData(collection)
  }

  useEffect(() => {
    getPeopleData('page', 1)
    getStarShipsData('https://swapi.dev/api/starships')
  }, [])

  return (
    <AppContext.Provider
      value={{
        peopleData,
        peoples,
        starshipData,
        searchTerm,
        handleSearchTerm,
        loading,
        currentPage,
        setCurrentPage,
        handleCurrentPage,
        totalPeople
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
