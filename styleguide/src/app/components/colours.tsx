export default function Colours() {
  return (
    <div className="p-4">
      <h2 className="text-3xl mb-4 p-2 border-b">Colour Palette</h2>
      <div className="grid grid-cols-6 gap-4">

        <div className="flex flex-col items-center p-4">
          <div className="w-28 h-28 rounded-full bg-[#003366] mb-4"></div>
          <p className="text-lg">Berkeley Blue</p>
          <p>#003366</p>
        </div>

        <div className="flex flex-col items-center p-4">
          <div className="w-28 h-28 rounded-full bg-[#FF6B6B] mb-4"></div>
          <p className="text-lg">Light Red</p>
          <p>#FF6B6B</p>
        </div>

        <div className="flex flex-col items-center p-4">
          <div className="w-28 h-28 rounded-full bg-[#DAA520] mb-4"></div>
          <p className="text-lg">Goldenrod</p>
          <p>#DAA520</p>
        </div>

        <div className="flex flex-col items-center p-4">
          <div className="w-28 h-28 rounded-full bg-[#5DA399] mb-4"></div>
          <p className="text-lg">Keppel</p>
          <p>#5DA399</p>
        </div>

        <div className="flex flex-col items-center p-4">
          <div className="w-28 h-28 rounded-full bg-[#FAFAFA] mb-4"></div>
          <p className="text-lg">Sea Salt</p>
          <p>#FAFAFA</p>
        </div>

        <div className="flex flex-col items-center p-4">
          <div className="w-28 h-28 rounded-full bg-[#4A4A4A] mb-4"></div>
          <p className="text-lg">Davy&apos;s Gray</p>
          <p>#4A4A4A</p>
        </div>

      </div>
      <div className="mt-6 grid grid-cols-6 gap-6 pb-8">
        <div className="border-l pl-2">
          <p>Berkeley Blue is utilized for quiz buttons and page accents, creating a sense of cohesion.</p>
          <br />
          <p>Blue evokes feelings of trust, reliability, and calm, suggesting stability associated with knowledge and expertise. For an educational platform discussing the complexities of fast fashion, it creates trust, helping users process information stress-free.</p> 
        </div>
        <div className="border-l pl-2">
          <p>Light Red accentuates features, especially pins on the map, adding a touch of vibrancy.</p>
          <br />
          <p>Red elicits emotions of urgency, alertness, and energy, drawing attention to significant details. In a platform about fast fashion's impacts, this hue underscores the immediate need for sustainable choices, galvanizing users towards conscientious decisions.</p>
        </div>
        <div className="border-l pl-2">
        <p>Goldenrod highlights important elements, ensuring they capture the user's attention.</p>
        <br />
        <p>Goldenrod embodies optimism, warmth, and clarity. As a hue reminiscent of sunlight and gold, it signifies value and enlightenment. Within an educational setting, it emphasizes the positive outcomes of sustainable fashion, encouraging users to make enlightened choices.</p>
        </div>
        <div className="border-l pl-2">
        <p>Keppel signifies positive feedback, like a correct answer, offering a visual reward.</p>
        <br />
        <p>Keppel, a serene shade of green, represents nature, renewal, and vitality. It's an apt hue for sustainability topics, reminding users of the environment. On a platform about fashion ethics, it celebrates the benefits of eco-friendly choices, inspiring hope and action.</p>
        </div>
        <div className="border-l pl-2">
        <p>Sea Salt provides a consistent backdrop, either solid or under images, ensuring clarity.</p>
        <br />
        <p>Sea Salt, an off-white hue, suggests purity, simplicity, and neutrality. As a backdrop, it offers a canvas for other colors and content to shine. In the context of fashion sustainability, it symbolizes a clean slate, promoting fresh perspectives and sustainable practices.</p>
        </div>
        <div className="border-l pl-2">
        <p>Davy&apos;s Gray is versatile, gracing buttons, nav icons, and text, setting a neutral tone.</p>
        <br />
        <p>Davy&apos;s Gray exudes sophistication, neutrality, and balance. It's a versatile color that can ground other brighter hues, aiding in focus. In lessons on fast fashion drawbacks, it serves as a neutral base, allowing other content to take center stage for effective learning.</p>
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}
