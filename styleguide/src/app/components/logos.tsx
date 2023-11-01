import Image from 'next/image'

export default function Logos() {

  return (
    <div>
      <h2 className="text-3xl p-4">Logos</h2>
      {/* Logo Block */}
      <div>
        {/* Main logo (Large) */}
        <div>
          <Image src={'/images/awarewear-logo.svg'} width={200} height={200} alt="AwareWear Logo" />
        </div>
        {/* Variation Logos (3 Smaller) */}
        <div>
          <Image src={'/images/awarewear-logo.svg'} width={100} height={100} alt="AwareWear Logo" />
          <Image src={'/images/awarewear-logo.svg'} width={100} height={100} alt="AwareWear Logo" />
          <Image src={'/images/awarewear-logo.svg'} width={100} height={100} alt="AwareWear Logo" />
        </div>
      </div>

    </div>
  )
}