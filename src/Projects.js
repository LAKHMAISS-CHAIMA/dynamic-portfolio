import { useEffect } from "react";
import { gsap } from "gsap";

function Projects() {
  useEffect(() => {
    gsap.from(".project-item", {
      opacity: 0,
      x: -100,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out", 
    });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-red-400 pb-10">Mes projets</h1>

      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="project-item card h-72 w-full overflow-hidden relative">
          <div className="image h-full">
            <img src="blog.jpg" alt="Blog" className="h-full w-full object-cover" />
          </div>
          <div className="title absolute bottom-0 bg-gray-950 bg-opacity-50 w-full py-1 px-2 font-bold rounded-sm shadow-md">
            Blog
          </div>
        </div>

        <div className="project-item card h-72 w-full overflow-hidden relative">
          <div className="image h-full">
            <img src="OIP.jpeg" alt="Weather App" className="h-full w-full object-cover" />
          </div>
          <div className="title absolute bottom-0 bg-gray-950 bg-opacity-50 w-full py-1 px-2 font-bold rounded-sm shadow-md">
            Weather App
          </div>
        </div>

        <div className="project-item card h-72 w-full overflow-hidden relative">
          <div className="image h-full">
            <img src="calculatrice.webp" alt="Calculatrice" className="h-full w-full object-cover" />
          </div>
          <div className="title absolute bottom-0 bg-gray-950 bg-opacity-50 w-full py-1 px-2 font-bold rounded-sm shadow-md">
            Calculatrice
          </div>
        </div>

        <div className="project-item card h-72 w-full overflow-hidden relative">
          <div className="image h-full">
            <img src="gestion de stock.jpg" alt="Gestion de Stock" className="h-full w-full object-cover" />
          </div>
          <div className="title absolute bottom-0 bg-gray-950 bg-opacity-50 w-full py-1 px-2 font-bold rounded-sm shadow-md">
            Gestion de Stock
          </div>
        </div>

        <div className="project-item card h-72 w-full overflow-hidden relative">
          <div className="image h-full">
            <img src="2cf0zrkr.png" alt="Portfolio" className="h-full w-full object-cover" />
          </div>
          <div className="title absolute bottom-0 bg-gray-950 bg-opacity-50 w-full py-1 px-2 font-bold rounded-sm shadow-md">
            Portfolio
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
