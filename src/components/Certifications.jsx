import React, { useState } from 'react';

export default function Certifications() {
  const [files, setFiles] = useState([]);

  return (
    <section className="min-h-screen bg-black text-cyan-300 p-4">
      <h2 className="text-3xl text-center mb-4">Certifications</h2>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => setFiles(Array.from(e.target.files))}
        className="block mx-auto"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {files.map((file, idx) => (
          <img
            key={idx}
            src={URL.createObjectURL(file)}
            alt={`cert-${idx}`}
            className="w-full h-40 object-cover rounded shadow-lg hover:scale-105 transition"
          />
        ))}
      </div>
    </section>
  );
}