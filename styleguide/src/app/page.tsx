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
      <h1>AwareWear Styleguide</h1>
      {/* Logos */}
      <div className="min-h-screen">
        <Logos />
      </div >
      {/* Colours */}
      <div className="min-h-screen">
        <Colours />
      </div>
      {/* Typography */}
      <div className="min-h-screen">
        <Typography />
      </div>
      {/* Graphics/ Icons */}
      <div className="min-h-screen">
        <Graphics />
      </div>
      {/* Photography */}
      <div className="min-h-screen">
        <Photography />
      </div>
    </div>
  )
}
