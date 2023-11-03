import Image from 'next/image'

export default function Logos() {

  return (
<div>
  <h2 className="text-3xl p-4 mb-4 border-b">Logos</h2>
  {/* Logos Container */}
  <div className="flex">
    {/* First Logo */}
    <div className="flex-1 flex flex-col items-center border-r-2 border-gray-400 px-4">
      <img src="/images/logo_real.png" alt="AwareWear Logo" className="h-[70%] mb-2" />
      <div className="border-t-2 border-gray-400 pt-2 w-full">
        <h3 className="border-b mb-2 pb-2 ">Main Logo</h3>
        <p>The AwareWear logo is a tag design with a vibrant green leaf at its heart, symbolizing eco-conscious values. Resting on a natural, paper-textured backdrop, it embodies organic authenticity. The bold "AwareWear" typography anchors the design, emphasizing education in sustainable fashion. The rustic border frames it all, blending structure with nature. This logo artfully fuses fashion, education, and environmental mindfulness.</p>
      </div>
    </div>
    {/* Second Logo */}
    <div className="flex-1 flex flex-col px-4">
      <h3 className="px-4 pb-2 border-b mb-2">Badge Logos</h3>
      <div className="border-b-2 border-gray-400 pb-4 px-4 w-full">
        <p>The AwareWear app badges are a quartet of distinct designs, each showcasing a core brand color. These rectangular badges encapsulate our brand's digital essence, and each hue has been handpicked to harmonize within the app environment. While consistent in their message, the variety in color offers flexibility and adaptability across different sections of our app. They serve as both a visual cue and a declaration: "AwareWear - Rethink Fashion," reinforcing our dedication to sustainability and conscious fashion choices with every swipe and tap.</p>
      </div>
      <img src="/images/quad-logo.png" alt="AwareWear Logo" className="h-[70%] mt-2" />
    </div>
  </div>
</div>

  )
}