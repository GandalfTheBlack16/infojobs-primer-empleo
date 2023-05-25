import './App.css'
import { FilterBox } from './components/FilterBox'
import { Logo } from './components/Logo'
import OfferList from './components/OfferList'
import { OfferContextProvider } from './contexts/OfferContext'

function App () {
  return (
    <OfferContextProvider>
      <header>
        <Logo/>
        <div>
          <h1>Encuentra tu primer empleo</h1>
        </div>
      </header>
      <main>
        <FilterBox />
        <OfferList />
      </main>
    </OfferContextProvider>
  )
}

export default App
