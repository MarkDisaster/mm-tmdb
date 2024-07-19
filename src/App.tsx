import MoviesComparingPage from './pages/MoviesComparing';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App = () => {

  return (
    <>
    <MoviesComparingPage />

    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React + TypeScript + SWC</h1>
    </>
  )
}

export default App

