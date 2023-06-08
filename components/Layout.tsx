import Navbar from "./Navbar"

export default function Layout ({ children  }: any) {
    return (
      <div className=" bg-[#F0EAD2] overflow-hidden px-2 py-2 flex flex-col justify-center min-h-screen">
        <main>{children}</main>
      </div>
    )
  }