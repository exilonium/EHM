import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Clipboard,
  Image,
  Video,
  FileText,
  Leaf,
  Building2,
  Globe,
  GraduationCap,
  Layers,
  Recycle,
  CloudRain,
} from "lucide-react";

// === RESOURCES MENU DATA ===
const resourcesMenu = [
  {
    title: "Discover",
    items: [
      { name: "Blogs", path: "/resources/blogs", icon: BookOpen },
      { name: "Case Studies", path: "/resources/casestudies", icon: Clipboard },
    ],
  },
  {
    title: "Learn",
    items: [
      { name: "Webinars", path: "/resources/webinar", icon: Video },
      { name: "Gallery", path: "/resources/gallery", icon: Image },
    ],
  },
  {
    title: "Solutions",
    items: [
      { name: "Waterbody Restoration", path: "/resources/WaterbodyRestoration", icon: Recycle },
    ],
  },
];

// === OFFERINGS MENU DATA ===
const offeringsMenu = [
  {
    title: "Main",
    items: [{ name: "Offerings ", path: "/offerings", icon: Layers }],
  },
  {
    title: "Sustainability Services",
    items: [
      {
        name: "Sustainability Assessment & Reporting",
        path: "/offerings/sustainability-assessment-reporting",
        icon: FileText,
      },
      { name: "Environmental Management", path: "/offerings", icon: Leaf },
    ],
  },
  {
    title: "Urban & Research",
    items: [
      {
        name: "Urban Planning & Management",
        path: "/offerings",
        icon: Building2,
      },
      { name: "Geophysical Investigation", path: "/offerings/geophysical-investigation", icon: Globe },
    ],
  },
  {
    title: "Capacity Building",
    items: [
      { name: "Training & Capacity Building", path: "/offerings", icon: GraduationCap },
      { name: "Climate Risk Intelligence", path: "/offerings", icon: CloudRain },
    ],
  },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" onClick={handleNavClick}>
          <img
            src="https://startinup.up.gov.in/crm/assets/user/images/Documents/Startup/A_STARTUP_UP_UPLC_00004244/startup_logo/168067577328965.png"
            alt="EHM Logo"
            className="h-12"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-6 font-medium">
          <li>
            <Link to="/" className="text-green-900 hover:shadow-none hover:text-yellow-400">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-green-900  hover:text-yellow-400 group hover:shadow-none focus:shadow-none focus:outline-none">
              ABOUT
            </Link>
          </li>

          {/* Offerings Dropdown */}
          <li className="relative group">
            <span
              ref={buttonRef}
              aria-expanded={activeDropdown === "offerings"}
              aria-haspopup="true"
              onClick={() => setActiveDropdown(activeDropdown === "offerings" ? null : "offerings")}
              className={`cursor-pointer flex items-center transition-colors duration-200 
                  ${activeDropdown === "offerings"
                  ? "text-yellow-400"
                  : "text-green-900 hover:text-yellow-400"
                }`}
            >
              OFFERINGS
              <span
                className={`ml-2 inline-block p-1 border-b-2 border-r-2 transition-all -translate-y-0.5 duration-300 ease-in-out 
                    ${activeDropdown === "offerings"
                    ? "-rotate-180 border-yellow-400"
                    : "rotate-45 border-green-900 group-hover:-rotate-180 group-hover:border-yellow-400"
                  }`}
              ></span>
            </span>
          </li>

          {/* Resources Dropdown */}
          <li className="relative group">
            <span
              aria-expanded={activeDropdown === "resources"}
              aria-haspopup="true"
              onClick={() => setActiveDropdown(activeDropdown === "resources" ? null : "resources")}
              className={`cursor-pointer flex items-center transition-colors duration-200 select-none no-bg
                ${activeDropdown === "resources"
                  ? "text-yellow-400"
                  : "text-green-900 hover:text-yellow-400"
                } 
                bg-none hover:bg-none focus:bg-none shadow-none hover:shadow-none focus:shadow-none outline-none`}
            >
              RESOURCES
              <span
                className={`ml-2 inline-block p-1 border-b-2 border-r-2 transition-all -translate-y-0.5 duration-300 ease-in-out 
                  ${activeDropdown === "resources"
                    ? "-rotate-180 border-yellow-400"
                    : "rotate-45 border-green-900 group-hover:-rotate-180 group-hover:border-yellow-400"
                  }`}
              ></span>
            </span>
          </li>


          <li>
            <Link
              to="/projects"
              className="text-green-900 hover:text-yellow-400"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-green-900 hover:text-yellow-400"
            >
              CONTACT
            </Link>
          </li>
        </ul>
        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden text-green-900 text-3xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span>{isMenuOpen ? "✕" : "☰"}</span>
        </div>
      </nav>

      {/* Desktop Dropdown Content - Aligned with Nav Grid */}
      {activeDropdown && (
        <div className="hidden lg:block absolute left-0 right-0 top-full">
          <div className="max-w-6xl mx-auto px-6 relative">
            <div
              ref={dropdownRef}
              className="absolute right-0 bg-white/95 backdrop-blur-xl animate-fadeIn shadow-2xl rounded-b-2xl border-x border-b border-gray-100/50"
              style={{
                width: activeDropdown === 'resources' ? '800px' : '1000px',
                maxWidth: 'calc(100vw - 3rem)',
              }}
            >
              <div className={`grid gap-12 px-8 pt-10 pb-8 ${activeDropdown === 'resources' ? 'grid-cols-3' : 'grid-cols-4'}`}>
                {(activeDropdown === "resources" ? resourcesMenu : offeringsMenu).map(
                  (section) => (
                    <div key={section.title} className="col-span-1">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{section.title}</h4>
                      <ul className="space-y-4">
                        {section.items.map((item) => (
                          <li key={item.path}>
                            <Link
                              to={item.path}
                              onClick={handleNavClick}
                              className="flex items-start space-x-3 text-green-900 hover:text-emerald-600 transition-all duration-300 group"
                            >
                              <div className="mt-1 p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                                <item.icon className="w-5 h-5" />
                              </div>
                              <div className="flex flex-col">
                                <span className="font-semibold text-base leading-tight">{item.name}</span>
                                <span className="text-xs text-gray-500 line-clamp-1 mt-1 font-normal opacity-0 group-hover:opacity-100 transition-opacity">Explore our {item.name.toLowerCase()} solutions</span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-4 space-y-4 animate-fadeIn">
          <Link
            to="/"
            onClick={handleNavClick}
            className="block text-green-900 hover:text-yellow-400"
          >
            HOME
          </Link>
          <Link
            to="/about"
            onClick={handleNavClick}
            className="block text-green-900 hover:text-yellow-400"
          >
            ABOUT
          </Link>

          {/* Mobile Offerings */}
          <details>
            <summary className="cursor-pointer text-green-900 hover:text-yellow-400 font-medium">
              OFFERINGS
            </summary>
            <div className="pl-4 mt-2 space-y-2">
              {offeringsMenu.map((section) => (
                <div key={section.title}>
                  <h4 className="text-green-800 font-semibold">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          onClick={handleNavClick}
                          className="flex items-center space-x-2 text-green-900 hover:text-yellow-400 bg-transparent hover:bg-transparent focus:bg-transparent transition group"
                        >

                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>

          {/* Mobile Resources */}
          <details>
            <summary className="cursor-pointer text-green-900 hover:text-yellow-400 font-medium">
              RESOURCES
            </summary>
            <div className="pl-4 mt-2 space-y-2">
              {resourcesMenu.map((section) => (
                <div key={section.title}>
                  <h4 className="text-green-800 font-semibold">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          onClick={handleNavClick}
                          className="flex items-center space-x-2 text-green-900 hover:text-yellow-400 transition group hover:shadow-none focus:shadow-none focus:outline-none"
                        >


                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>

          <Link
            to="/projects"
            onClick={handleNavClick}
            className="block text-green-900 bg-transparent hover:text-yellow-400"
          >
            PROJECTS
          </Link>
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="block text-green-900 hover:text-yellow-400"
          >
            CONTACT
          </Link>
        </div>
      )}

    </header>
  );
};

export default NavBar;
