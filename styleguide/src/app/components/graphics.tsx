import HomeIcon from './icons/home'
import EducationIcon from './icons/education'
import QuizIcon from './icons/quiz'
import MapIcon from './icons/map'

export default function Graphics() {

  return (
    <div className="p-4">
      <h2 className="text-3xl mb-8 p-2 border-b">Graphics & Iconography</h2>

      {/* Buttons */}<h3 className="font-semibold mt-4 mb-2 p-2 border-b">Buttons</h3>
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr>
            <th className="w-1/4 text-lg font-bold pb-2 mb-4 border-b">States</th>
            <th className="w-1/4 text-lg font-bold pb-2 mb-4 border-b text-center">Primary Buttons</th>
            <th className="w-1/4 text-lg font-bold pb-2 mb-4 border-b text-center">Tertiary Buttons</th>
            <th className="w-1/4 text-lg font-bold pb-2 mb-4 border-b text-center">Secondary Buttons</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center font-medium py-4 border-r">Active</td>
            <td className="py-4 text-center">
              <button className="m-2 bg-[#003366] text-white font-semibold rounded-full px-10 py-2.5 shadow-lg hover:bg-blue-600 transition-colors duration-300">
                Text Only
              </button>
            </td>
            <td className="py-4 text-center">
              <button className="m-2 bg-[#4A4A4A] text-white font-semibold rounded-full px-10 py-2.5 shadow-lg hover:bg-yellow-400 transition-colors duration-300">
                Text Only
              </button>
            </td>
            <td className="py-4 text-center">
              <button className="m-2 bg-[#003366] text-white font-semibold rounded-full px-6 py-2.5 shadow-lg hover:bg-blue-600 transition-colors duration-300">
                Text Only
              </button>
            </td>
          </tr>
          <tr>
            <td className="text-center font-medium py-4 border-r">Hover</td>
            <td className="pb-4 text-center">
              <button className="m-2 bg-sky-700 text-white font-semibold rounded-full px-10 py-2.5 shadow-lg transition-colors duration-300">
                Text Only
              </button>
            </td>
            <td className="pb-4 text-center">
              <button className="m-2 bg-gray-600 text-white font-semibold rounded-full px-10 py-2.5 shadow-lg transition-colors duration-300">
                Text Only
              </button>
            </td>
            <td className="pb-4 text-center">
              <button className="m-2 bg-sky-700 text-white font-semibold rounded-full px-6 py-2.5 shadow-lg transition-colors duration-300">
                Text Only
              </button>
            </td>
          </tr>
          <tr>
            <td className="text-center font-medium py-4 border-b border-r">Disabled</td>
            <td className="pb-4 text-center border-b">
              <button className="m-2 bg-gray-400 text-white font-semibold rounded-full px-10 py-2.5 cursor-not-allowed" disabled>
                Text Only
              </button>
            </td>
            <td className="pb-4 text-center border-b">
              <button className="m-2 bg-gray-400 text-white font-semibold rounded-full px-10 py-2.5 cursor-not-allowed" disabled>
                Text Only
              </button>
            </td>
            <td className="pb-4 text-center border-b">
              <button className="m-2 bg-gray-400 text-white font-semibold rounded-full px-6 py-2.5 cursor-not-allowed" disabled>
                Text Only
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Buttons Descriptions */}
      <p className="mt-4 mb-2 ml-4">
        1. Primary buttons, featuring a prominent design and bold colors aligned with our brand, will be strategically placed to facilitate the most common actions, such as launching core features of the application like the personal sustainability tracker or the virtual wardrobe.
      </p>
      <br />
      <p className="mb-2 ml-4">
        2. Secondary buttons, designed with a subtler appearance, will be used to provide users with quick access to a wealth of resources such as in-depth guides on sustainable fashion practices and external educational materials.
      </p>
      <br />
      <p className="mb-2 ml-4">
        3. Tertiary buttons, with a more discreet design, will be employed for navigation within the application's interactive quiz section, guiding users through questions and leading them towards a more informed understanding of their fashion footprint.
      </p>
      <div>
        <h2 className="font-semibold mt-4 mb-2 p-2 border-b">Iconography</h2>
        <p className="mt-4 ml-4">
          Icons will be used to provide users with visual cues to facilitate navigation and improve the overall user experience.
        </p>
        <br />
        <p className="mb-2 ml-4">We have 4 main icons that will be used for navigation on the bottom of the mobile screen.</p>
      </div>
      <div className="mx-8">
        <div>
          <h3 className="border-b pb-2 mb-2">Home</h3>
          <p>This button will navigate users to the home page where the can also access the educational resource, sustainable aptitude quiz, and textile recycling resource pages.</p>
          <HomeIcon />
        </div>
        <div>
          <h3 className="border-b pb-2 mb-2">Educational Resources</h3>
          <p>Here the user can navigate to our educational resources. This will be a series of pages with facts about the fast fashion industry and how to make more educated decisions when purchasing.</p>
          <EducationIcon />
        </div>
        <QuizIcon />
        <MapIcon />
      </div>
    </div>
  )
}
