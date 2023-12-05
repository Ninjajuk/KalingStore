import Footer from "./Components/Footer";
import Navbar4 from "./Components/Navbar";
import Example from "./Components/Navbar/Navbar1";
import Example1 from "./Components/Navbar/Navbar2CenteredSearch";
import Example3 from "./Components/Navbar/Navbar3Dark";
import Example4 from "./Components/Navbar/NavbarQuickAction";
import ProductList from "./Product/ProductList";


export default function Home() {
  return (
    <main >
      {/* <Navbar4/> */}
      <Example/>
      <Example1/>
      <Example3/>
      <Example4/>
      {/* <h1 className='text-blue-400 text-2xl text-center'>Kaling Store</h1> */}
      <ProductList/>
{/* <Footer/> */}
    </main>
  )
}
