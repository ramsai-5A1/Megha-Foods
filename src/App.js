import { RouterProvider } from "react-router-dom"
import "./App.css"
import appRouter from "./helper/routes"

const App = () => {
  return (
    <div className="bg-gray-200 w-full h-screen">
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App