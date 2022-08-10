import { Routes, Route } from "react-router"
import { Home } from "../pages/Home"
import { DefaultLayout } from "../layouts/DefaultLayout"

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}