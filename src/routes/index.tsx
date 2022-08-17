import { Routes, Route } from "react-router"
import { Checkout, Home } from "../pages"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { Success } from "../pages/Success"

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/success' element={<Success />} />
      </Route>
    </Routes>
  )
}