// Import Components
import Navbar from './components/navbar'
import Logos from './components/logos'
import Colours from './components/colours'
import Typography from './components/typography'
import Graphics from './components/graphics'
import Photography from './components/photography'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-[100px]" id="home">
        <h1 className="flex text-6xl justify-center">AwareWear Styleguide</h1>
      </div>

      {/* Logos */}
      <div className="min-h-screen" id="logos">
          <Logos />
      </div >

      {/* Colours */}
      <div className="min-h-screen" id="colours">
        <Colours />
      </div>

      {/* Typography */}
      <div className="min-h-screen" id="typography">
        <Typography />
      </div>

      {/* Graphics/ Icons */}
      <div className="min-h-screen" id="graphics">
        <Graphics />
      </div>

      {/* Photography */}
      <div className="min-h-screen" id="photography">
        <Photography />
      </div>
    </div>
  )
}
