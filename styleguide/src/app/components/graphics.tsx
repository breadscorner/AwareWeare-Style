export default function Graphics() {

  return (
    <div className="p-8">

      <h2 className="text-xl font-bold mb-4">Buttons</h2>

      {/* Educational Buttons */}
      <div className="mb-8">

        <h3 className="text-lg font-semibold mb-2">Educational Buttons</h3>
        <p>This button will take users to our educational pages with facts about the importance of making better decisions when it comes to sustainable fashion and textile recycling.</p>
        <button className="m-2 bg-[#003366] text-white font-semibold rounded-full px-10 py-2.5 shadow-lg hover:bg-blue-600 transition-colors duration-300">
          Learn
        </button>

        {/* Quiz Buttons */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quiz Buttons</h3>
          <button className="m-2 bg-[#003366] text-white font-semibold rounded-full px-10 py-2.5 shadow-lg hover:bg-blue-600 transition-colors duration-300">
            Start
          </button>
          <br />
          <button className="m-2 bg-[#003366] text-white font-semibold rounded-full px-6 py-2 shadow-lg hover:bg-blue-700 active:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300">
            Back
          </button>
          <br />
          <button className="m-2 bg-[#003366] text-white font-semibold rounded-full px-6 py-2 shadow-lg hover:bg-blue-700 active:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300">
            Next
          </button>

          {/* Example Quiz Answers */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold mb-2">Quiz Answers</h4>
            <p className="p-4">Answers will remain Berkeley Blue until clicked. Once the selection is made the answer will turn Goldenrod Yellow</p>
            {/* Option A */}
            <button className="bg-[#003366] text-white rounded-lg ml-2 px-6 py-2 w-[25%] text-left shadow-md hover:bg-blue-700 active:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              A) Create durable clothing
            </button>
            <br />

            {/* Option B */}
            <button className="bg-[#003366] text-white rounded-lg ml-2 px-6 py-2 w-[25%] text-left shadow-md hover:bg-blue-700 active:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              B) Promote sustainable practices
            </button>
            <br />

            {/* Option C */}
            <button className="bg-[#DAA520] text-white rounded-lg ml-2 px-6 py-2 w-[25%] text-left shadow-md hover:bg-yellow-500 active:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
              C) Produce clothing quickly and cheaply
            </button>
            <br />

            {/* Option D */}
            <button className="bg-[#003366] text-white rounded-lg ml-2 px-6 py-2 w-[25%] text-left shadow-md hover:bg-blue-700 active:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              D) Increase the use of organic materials
            </button>
          </div>


        </div>


      </div>
    </div>
  )
}