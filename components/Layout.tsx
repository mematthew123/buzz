import Navbar from "./Navbar"

export default function Layout ({ children  }: any) {
    return (
      <div className=" bg-gray-100 flex flex-col justify-center min-h-screen">
        <main>{children}</main>
      </div>
    )
  }