import Mobile from './mobile-design';

export default function Grid() {
  return (
    <div>

      <h2 className="text-3xl p-4 mb-4 border-b w-full">Grid Layout</h2>
      <div className="flex">

        {/* First Column - Mobile Design */}
        <div className="w-1/3 mb-4">
          <Mobile />
        </div>

        {/* Second and Third Column - Descriptions */}
        <div className="w-2/3 p-4 mb-4 border-l">
          <h3 className="text-2xl mb-4 border-b w-[50%]">Mobile Screen</h3>

          {/* Descriptions */}
          <div className="border-l px-4">

            {/* Grid View 1 */}
            <h4 className="font-semibold">Main Navigational Page</h4>
            <p className="text-sm italic mb-4">Displayed on left</p>
            <p className="mb-4">Grid Container: The main screen will compose of 3 block elements that will act as buttons leading users to our 3 main features:</p>
            <p className="mb-4 ml-2">
              1. Educational resources such as comprehensive articles and infographics detailing the impacts of the fast fashion industry on the environment, including water usage, carbon emissions, and labor practices.
            </p>
            <p className="mb-4 ml-2">
              2. An interactive quiz designed to evaluate a user's knowledge of fashion sustainability, featuring questions on ethical sourcing, environmental impact, and best practices for clothing longevity and care.
            </p>
            <p className="mb-4 ml-2">
              3. A curated list of textile sustainability resources, including a map of local eco-friendly stores, recycling depots, and upcycling workshops, encouraging users to participate in sustainable fashion consumption and disposal.
            </p>


          </div>
        </div>
      </div>
    </div>
  );
}
