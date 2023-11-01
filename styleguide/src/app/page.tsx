// Import Components
import Navbar from './components/navbar'
import Logos from './components/logos'
import Colours from './components/colours'
import Typography from './components/typography'
import Graphics from './components/graphics'
import Photography from './components/photography'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gray-900 absolute z-10 w-full">
      <Navbar />
      <div className="min-h-screen mt-[225px] relative container mx-auto" id="home">

        {/* Image positioned to the left */}
        <Image
          src="/images/Logo.png"
          width={250}
          height={250}
          alt="AwareWear Logo"
          className="absolute left-0 z-1 top-250 shadow-lg p-4"
        />

        {/* h1 and h2 elements stacked and centered */}
        <div className="flex flex-col justify-center items-start p-10 space-y-6 ml-auto mr-auto border-l-4 border-gray-400 w-3/5">
          <h1 className="text-[4em] font-extrabold serif uppercase text-white shadow-lg bg-gradient-to-r from-[#003366] via-[#5DA399] to-[#FF6B6B] p-2 rounded">AwareWear</h1>
          <h2 className="text-[5em] font-bold sans uppercase text-white shadow-md">Brand Style</h2>
          <h2 className="text-[4em] font-light italic monospace uppercase text-white shadow-md">Guide</h2>
        </div>

      </div>

      {/* Logos */}
      <div className="min-h-screen py-12 border-t border-gray-800" id="logos">
        <Logos />
      </div>

      {/* Colours */}
      <div className="min-h-screen py-12 border-t border-gray-800" id="colours">
        <Colours />
      </div>

      {/* Typography */}
      <div className="min-h-screen py-12 border-t border-gray-800" id="typography">
        <Typography />
      </div>

      {/* Graphics/ Icons */}
      <div className="min-h-screen py-12 border-t border-gray-800" id="graphics">
        <Graphics />
      </div>

      {/* Photography */}
      <div className="min-h-screen py-12 border-t border-gray-800" id="photography">
        <Photography />
      </div>
    </div>
  )
}
