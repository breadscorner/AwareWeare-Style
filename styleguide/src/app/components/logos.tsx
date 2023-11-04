export default function Logos() {

  return (
    <div className="p-4">
      <h2 className="text-3xl p-4 mb-4 border-b">Logos</h2>
      {/* Logos Container */}
      <div className="flex">
        {/* First Logo */}
        <div className="flex-1 flex flex-col items-center border-r-2 border-gray-400 px-4">
          <img src="/images/logo_real.png" alt="AwareWear Logo" className="h-400" />
          <div className="border-t-2 border-gray-400 pt-4 w-full">
            <h3 className="border-b mb-4 pb-4 font-semibold">Main Logos</h3>
            <p>The AwareWear logo takes the shape of a clothing tag, with a vibrant green leaf cradled at its center, reflecting our commitment to the environment. It&apos;s set against a backdrop reminiscent of natural paper, enhancing its organic appeal. &apos;AwareWear&apos; is written in bold letters, underscoring our focus on sustainable fashion education. A rustic border encases the logo, marrying structure with the essence of nature. The logo comes in three variants: full color on the left, displaying the leaf in its lush green; a grayscale version in the middle, for understated elegance; and a stark black and white version on the right, for classic simplicity. Each version represents our fusion of style, learning, and eco-awareness.</p>
          </div>
        </div>
        {/* Second Logo */}
        <div className="flex-1 flex flex-col px-4">
          <h3 className="px-4 pb-4 border-b mb-2 font-semibold">Badge Logos</h3>
          <div className="border-b border-gray-400 pb-4 px-4 w-full">
            <p>
              AwareWear features six badge logos, each splashed with one of our signature colors. The font was deliberately chosen due to how the letters W nests into the A. These badges aren&apos;t just pretty— they&apos;re a key part of our app&apos;s look and feel. More than that, they&apos;re on brand with sustainable fashion. They use our brands colours to fit seamlessly with our application. The leaf within the logo is representative of sustainability and the subtitle speaks to educating our users to rethink they&apos;re fashion decisions.
            </p>
          </div>
          <img src="/images/quad-logo.png" alt="AwareWear Logo" className="h-100" />
        </div>
      </div>
      <div className="border-t mt-4 pt-4 ">
        <h3 className="px-4 pb-4 border-b mb-2 font-semibold">Logo Sizing</h3>
        <div className="border-gray-400 pb-4 px-4 w-full">
          <p className="pt-2">
            Badge Logos:
            Designed to be clear and legible at a standard size of 60 pixels tall to ensure visibility within the app&apos;s interfaces, suitable for high-resolution displays.
            Each badge displays one of the brand&apos;s six signature colors, optimized for quick recognition.
          </p>
          <br />
          <p>
            Hang Tag Main Logo:
            Presented at a standard size appropriate for mobile interfaces, generally above 60 pixels tall, to maintain visibility and brand presence, with an enlarged version featured prominently on the landing page.
            Available in three variations: full color, grayscale, and black and white, each designed to be distinct and legible across different devices.
          </p>
          <br />
          <p>
            Color and Clarity:
            Logos are created to be easily readable and visually appealing at a size that&apos;s standard for mobile displays, ensuring the branding is effective and consistent.
            Color variants of the logos are chosen to contrast well with various backgrounds, enhancing visibility and recognition.
          </p>
          <br />
          <p>
            Accessibility:
            The logos are designed with accessibility in mind, including alternative text for screen readers.
            A clear space guideline ensures logos stand out from other UI elements, with padding that&apos;s proportionate to the logo&apos;s size.
          </p>
        </div>
      </div>
    </div>

  )
}