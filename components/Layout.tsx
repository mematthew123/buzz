import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: any) {
  return (
    <div className='bg-[#004643] px-2 py-2 flex flex-col justify-center min-h-screen overflow-x-hidden'>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
