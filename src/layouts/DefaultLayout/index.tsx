import { Outlet } from "react-router"
import { Header } from "../../components"
import { Page } from "../../components/Page"

export const DefaultLayout = () => {
  return (
    <Page>
      <Header />
      <Outlet />
    </Page>
  )
}