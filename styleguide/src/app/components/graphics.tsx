export default function Graphics() {

  return (
    <div className="p-4">
      <h2 className="text-3xl mb-8 p-2 border-b">Graphics & Iconography</h2>

      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr>
            <th className="w-1/3 text-xl font-bold mb-4 border-b">Primary Buttons</th>
            <th className="w-1/3 text-xl font-bold mb-4 border-b">Secondary Buttons</th>
            <th className="w-1/3 text-xl font-bold mb-4 border-b">Tertiary Buttons</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="pr-4 pb-4">
              <p>Default</p>
              <button className="m-2 bg-[#003366] text-white font-semibold rounded-full px-10 py-2.5 shadow-lg hover:bg-blue-600 transition-colors duration-300">
                Text Only
              </button>
            </td>
            <td className="px-4 pb-4">
              <button className="m-2 bg-[#4A4A4A] text-white font-semibold rounded-full px-10 py-2.5 shadow-lg hover:bg-yellow-400 transition-colors duration-300">
                Text Only
              </button>
            </td>
            <td className="pl-4 pb-4">
              <button className="m-2 bg-[#003366] text-white font-semibold rounded-full px-6 py-2.5 shadow-lg hover:bg-blue-600 transition-colors duration-300">
                Text Only
              </button>
            </td>
          </tr>
          <tr className="border-b">
            <td className="pr-4 pb-4">
              <p>Hover</p>
              <button className="m-2 bg-blue-600 text-white font-semibold rounded-full px-10 py-2.5 shadow-lg transition-colors duration-300">
                Text Only
              </button>
            </td>
            <td className="px-4 pb-4">
              <button className="m-2 bg-gray-600 text-white font-semibold rounded-full px-10 py-2.5 shadow-lg transition-colors duration-300">
                Text Only
              </button>
            </td>
            <td className="pl-4 pb-4">
              <button className="m-2 bg-blue-600 text-white font-semibold rounded-full px-6 py-2.5 shadow-lg transition-colors duration-300">
                Text Only
              </button>
            </td>
          </tr>
          <tr>
            <td className="pr-4 pb-4">
              <p>Disabled</p>
              <button className="m-2 bg-gray-400 text-white font-semibold rounded-full px-10 py-2.5 cursor-not-allowed" disabled>
                Text Only
              </button>
            </td>
            <td className="px-4 pb-4">
              <button className="m-2 bg-gray-400 text-white font-semibold rounded-full px-10 py-2.5 cursor-not-allowed" disabled>
                Text Only
              </button>
            </td>
            <td className="pl-4 pb-4">
              <button className="m-2 bg-gray-400 text-white font-semibold rounded-full px-6 py-2.5 cursor-not-allowed" disabled>
                Text Only
              </button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}
