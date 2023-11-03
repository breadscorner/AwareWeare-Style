import Mobile from './mobile-design';

export default function Grid() {
  return (
    <div>

      <h2 className="text-3xl p-4 mb-4 border-b w-full">Grid Layout</h2>
      <div className="flex">

        {/* First Column - Mobile Design */}
        <div className="w-1/3 border-b">
          <Mobile />
        </div>

        {/* Second and Third Column - Descriptions */}
        <div className="w-2/3 p-4 border-b">
          <h3 className="text-2xl mb-3">Mobile Screen</h3>

          {/* Descriptions */}
          <div className="border-l px-4">

            {/* Grid View 1 */}
            <h4 className="font-semibold">Main Navigational Page</h4>
            <p className="text-sm italic mb-4">Displayed on left</p>
            <p className="mb-4">Grid Container: The main screen will compose of 3 block elements that will act as buttons leading users to our 3 main features:</p>
            <p className="mb-2 ml-2">1. Educational resources such as facts about the fast fashion industry.</p>
            <p className="mb-2 ml-2">2. Quiz to measure a persons knowledge on fashion sustainability.</p>
            <p className="mb-4 ml-2">3. Textile sustainability resources such as locations of stores and recycling depots.</p>

          </div>
        </div>
      </div>
    </div>
  );
}
