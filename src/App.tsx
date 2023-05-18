import './App.css'
import { FilterBox } from './components/FilterBox'
import { Logo } from './components/Logo'

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
      </main>
    </>
  )
}

export default App
