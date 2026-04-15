import React, { useEffect } from 'react'
import ProjectShow from '../Components/Project/ProjectShow'
import Logo from "../Components/LandingPage/Logo";
import { TestimonialsSection } from '../Components/LandingPage/testimonials1';

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | EHM Earth Hydro Management";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
       <ProjectShow/>
       <Logo />
       <TestimonialsSection />
       
    </div>
  )
}

export default Projects