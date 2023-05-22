import './App.css'
import { FilterBox } from './components/FilterBox'
import { Logo } from './components/Logo'
import OfferList from './components/OfferList'

function App () {
  return (
    <>
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
    </>
  )
}

export default App
