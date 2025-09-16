import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { Toaster } from "./components/ui/toaster"

const App = () => {
  return (
    <>
    <Toaster/>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
