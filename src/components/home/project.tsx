"use client";
import Image from "next/image";

// Define project type
type Project = {
  id: number;
  name: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "News Application",
    image: "/p1.jpg",
  },
  {
    id: 2,
    name: "Job Protal Website",
    image: "/p2.png",
  },
  {
    id: 3,
    name: "Stock Predication Project",
    image: "/p3.png",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-8 md:px-16 py-12 bg-blue-50 rounded-2xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900">Featured Projects</h2>
        <a href="#" className="text-blue-600 hover:underline text-lg">
          More Projects →
        </a>
      </div>
      <p className="text-gray-600 mb-8">
        Explore our latest projects and see how we bring ideas to life.
      </p>

      {/* Only showing 3 projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="relative group overflow-hidden rounded-lg shadow-lg">
            <Image
              src={project.image}
              alt={project.name}
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">{project.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
