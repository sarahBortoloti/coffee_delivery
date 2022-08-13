import { Routes, Route } from "react-router"
import { Checkout, Home } from "../pages"
import { DefaultLayout } from "../layouts/DefaultLayout"

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}