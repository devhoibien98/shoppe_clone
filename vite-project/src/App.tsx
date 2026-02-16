import './App.css'
import useRouterElement from './useRouterElement'

function App() {
  const routeElements = useRouterElement()
  return <>{routeElements}</>
}

export default App
