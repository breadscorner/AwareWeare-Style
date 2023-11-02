import Image from 'next/image'

export default function Logos() {

  return (
<div>
  <h2 className="text-3xl p-4">Logos</h2>
  {/* Logos Container */}
  <div className="flex">
    {/* First Logo */}
    <div className="flex-1 flex flex-col items-center border-r-2 border-gray-400 p-4">
      <img src="/images/logo_real.png" alt="AwareWear Logo" className="h-[70%] mb-4" />
      <div className="border-t-2 border-gray-400 p-4 w-full">
        <p>Our current logo has been revamped to present a more realistic and detailed depiction. This enhanced version serves as our hang tag logo, specifically designed for tagging products or merchandise. The meticulous detailing and refined aesthetics align with our commitment to quality and brand consistency, ensuring that it stands out and resonates when attached to items, reinforcing our brand's identity with every glance.</p>
      </div>
    </div>
    {/* Second Logo */}
    <div className="flex-1 flex flex-col items-center p-4">
      <div className="border-b-2 border-gray-400 pb-4 px-4 w-full">
        <p>These are four uniquely designed badge-style logos, each thoughtfully crafted to represent and highlight one of our primary brand colors. These badges not only embody our brand's identity but also emphasize the diversity and richness of our color palette, ensuring that each color resonates with our brand's ethos and message.</p>
      </div>
      <img src="/images/quad-logo.png" alt="AwareWear Logo" className="h-[70%] mt-4" />
    </div>
  </div>
</div>

  )
}