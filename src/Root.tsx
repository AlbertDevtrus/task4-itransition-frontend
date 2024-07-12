import { Outlet } from "react-router-dom"

function Root() {

  return (
    <main className="w-screen h-screen bg-slate-500">
        <Outlet />
    </main>
  )
}

export default Root
