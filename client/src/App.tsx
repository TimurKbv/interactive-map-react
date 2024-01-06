import Footer from "./components/Footer"
import Header from "./components/Header"
import MainMap from "./components/MainMap"
import NavBar from "./components/NavBar"


function App() {

  return (
    <div className="grid grid-cols-8 grid-rows-12 w-screen h-screen bg-gray-400 ">
      <Header />
      <NavBar />
      <MainMap />
      <Footer />
    </div>
  )
}

export default App
