import React from 'react';

export default function Projects() {
  const projects = [
    { 
      name: "Spyware APK (Camera Filter App)", 
      desc: "I developed a spyware APK as part of a cybersecurity learning project. The app mimicked a camera filter application and demonstrated how permissions can be misused if a user unknowingly grants access. The project was conducted in a controlled, ethical environment for educational purposes only.", 
      image: "/projects/spyware.jpg"
    },
    { 
      name: "SSH Brute Force Detection and Prevention with Wazuh", 
      desc: "Configured Wazuh to detect SSH brute force attacks and trigger automated active responses like IP blocking to prevent unauthorized access.",
      image: "/projects/ssh.jpg"
    },
    { 
      name: "Suricata Integration with Wazuh", 
      desc: "Integrated Suricata with Wazuh to monitor network traffic and generate alerts for suspicious activity.",
      image: "/projects/suricata.jpeg"
    },
    { 
      name: "RDP Login Monitoring with Splunk", 
      desc: "Configured Splunk to collect and analyze Windows Event Logs to detect RDP login attempts and identify brute-force activity.",
      image: "/projects/splunk.png"
    },
    { 
      name: "VirusTotal + Wazuh Real-Time Threat Detection", 
      desc: "Utilized Wazuh's custom rules and VirusTotal API to detect and classify malicious files and URLs in real-time.",
      image: "/projects/virustotal.jpeg"
    },
    { 
      name: "AES File Encryption Tool (C++)", 
      desc: "Developed a command-line AES encryption/decryption tool in C++ to securely encrypt and decrypt text files.",
      image: "/projects/aes.png"
    },
  ];

  return (
    <section className="min-h-screen bg-black text-cyan-300 p-6">
      <h2 className="text-3xl text-center mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transform transition">
            <img src={proj.image} alt={proj.name} className="w-full h-40 object-cover mb-3 rounded" />
            <h3 className="text-xl font-semibold mb-1">{proj.name}</h3>
            <p className="text-sm">{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
