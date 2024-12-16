import { NavLink } from "react-router"

function App() {

  
  return (
    <div>
      <h1>React Express Project</h1>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <NavLink to="/data">Data</NavLink>

    </div>
  )
}

export default App