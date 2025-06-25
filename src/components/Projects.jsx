import React from 'react';

export default function Projects() {
  const projects = [
    { name: "Project 1", desc: "Description of project 1", image: "/project1.png" },
    { name: "Project 2", desc: "Description of project 2", image: "/project2.png" }
  ];

  return (
    <section className="min-h-screen bg-black text-cyan-300 p-4">
      <h2 className="text-3xl text-center mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transform transition">
            <img src={proj.image} alt={proj.name} className="w-full h-40 object-cover mb-2 rounded"/>
            <h3 className="text-xl">{proj.name}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}