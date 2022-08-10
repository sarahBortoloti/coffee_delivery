import { Outlet } from "react-router"
import { Page } from "../../components/Page"

export const DefaultLayout = () => {
  return (
    <Page>
      <Outlet />
    </Page>
  )
}