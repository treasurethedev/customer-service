import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Main from './pages/Main'

function App() {

  return (
    <>
      <div className='scroll-smooth bg-gradient-to-b from-cyan-50 via-transparent to-cyan-100/90 bg-fixed min-h-screen'>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
