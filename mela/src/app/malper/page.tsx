// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain

import React from 'react'

function page() {
  return (
    <main className="flex-grow container mx-auto py-8">
    {/* Dashboard Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card 1: Active Projects */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <img
          src="https://via.placeholder.com/300x150"
          alt="Active Projects"
          className="w-full h-32 object-cover rounded-t-lg mb-4"
        />
        <h3 className="text-xl font-bold mb-2">Active Projects</h3>
        <p className="text-gray-600">You currently have 5 active projects.</p>
        <a href="#projects" className="text-blue-500 hover:underline mt-4 block">
          View Projects
        </a>
      </div>
  
      {/* Card 2: Team Members */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <img
          src="https://via.placeholder.com/300x150"
          alt="Team Members"
          className="w-full h-32 object-cover rounded-t-lg mb-4"
        />
        <h3 className="text-xl font-bold mb-2">Team Members</h3>
        <p className="text-gray-600">Your team consists of 12 members.</p>
        <a href="#team" className="text-blue-500 hover:underline mt-4 block">
          Manage Team
        </a>
      </div>
  
      {/* Card 3: Upcoming Deadlines */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <img
          src="https://via.placeholder.com/300x150"
          alt="Upcoming Deadlines"
          className="w-full h-32 object-cover rounded-t-lg mb-4"
        />
        <h3 className="text-xl font-bold mb-2">Upcoming Deadlines</h3>
        <p className="text-gray-600">3 deadlines are approaching this week.</p>
        <a href="#deadlines" className="text-blue-500 hover:underline mt-4 block">
          Check Deadlines
        </a>
      </div>
    </div>
  
    {/* Recent Updates Section */}
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Recent Updates</h2>
      <ul className="list-disc pl-5 text-gray-700">
        <li>New feature added to the project management tool.</li>
        <li>Weekly team meeting scheduled for Friday.</li>
        <li>System maintenance planned for Saturday night.</li>
      </ul>
    </div>
  </main>
  )
}

export default page