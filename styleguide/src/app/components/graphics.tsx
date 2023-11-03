export default function Graphics() {
  return (
    <div className="p-4">
      <h2 className="text-3xl mb-8 p-2 border-b">Graphics & Iconography</h2>

      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr>
            <th className="w-1/4 text-xl font-bold pb-2 mb-4 border-b">States</th>
            <th className="w-1/4 text-xl font-bold pb-2 mb-4 border-b text-center">Primary Buttons</th>
            <th className="w-1/4 text-xl font-bold pb-2 mb-4 border-b text-center">Secondary Buttons</th>
            <th className="w-1/4 text-xl font-bold pb-2 mb-4 border-b text-center">Tertiary Buttons</th>
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
      <h4 className="font-semibold mt-4 p-4">Buttons</h4>
      <p className="mb-2 ml-2">1. Primary buttons will be used for launching elements of the application.</p>
      <p className="mb-2 ml-2">2. Secondary buttons for providing links to resources.</p>
      <p className="mb-2 ml-2">3. Tertiary buttons for navigating the application quiz.</p>
    </div>
  )
}
