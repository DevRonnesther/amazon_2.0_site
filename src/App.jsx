import Banner from "./components/Banner/Banner"
import Header from "./components/Header/Header"
import ProductFeed from "./components/ProductFeed/ProductFeed"
// import Product from "./components/Product/Product"

function App() {

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />

        {/* PorductFeed */}
        <ProductFeed  />
        {/* <Product /> */}
      </main>
      
    </div>
  )
}

export default App
