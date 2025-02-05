import { useEffect } from "react";
import { gsap } from "gsap";

function Contact() {
  useEffect(() => {
    gsap.from(".contact-form", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
    });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-red-400 pb-50">Contactez-moi</h1>

      <div className="flex justify-center gap-4 mt-2">
       
        <a href="https://github.com/LAKHMAISS-CHAIMA" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-400">
          <i className="bx bxl-github"></i>
        </a>
        <a href="https://linkedin.com/in/Chaimaa-Lakhmaiss" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-3xl hover:text-blue-300">
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>
        <div className="mb-4 mt-2">
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input type="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">Message</label>
          <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Submit</button>
      
    </div>
  );
}

export default Contact;
