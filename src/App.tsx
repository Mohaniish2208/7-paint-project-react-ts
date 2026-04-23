import { Route, Routes } from "react-router-dom"
import Header from "./components/Layouts/Header"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
    </Routes>
  )
}

export default App
