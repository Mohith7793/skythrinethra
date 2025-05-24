import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu, Bone as Drone, Code, GraduationCap, HomeIcon, Users, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
          <span className="inline-block">
  <img
    src="https://skythrinethrssets.blob.core.windows.net/skythrinethfiles/SKYTHRINETHRA.png?sp=r&st=2025-05-24T10:01:27Z&se=2026-07-01T18:01:27Z&spr=https&sv=2024-11-04&sr=b&sig=x%2BDRIAlLlExpUje%2BND7qVd78aoJNCVAf4DEPzOOFVOU%3D"
    alt="SkyThrinethra Logo"
    className="h-10 w-auto object-contain"
  />
</span>

            <span className={`font-bold text-xl ${isScrolled ? 'text-blue-600' : 'text-white'}`}>ＳＫＹＴＨＲＩＮΞＴＨＲΛ</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <NavLink to="/" icon={<HomeIcon size={18} />} label="Home" isScrolled={isScrolled} />
            <NavLink to="/drones" icon={<X size={18} />} label="Drones" isScrolled={isScrolled} />
            <NavLink to="/software" icon={<Code size={18} />} label="Software" isScrolled={isScrolled} />
            <NavLink to="/training" icon={<GraduationCap size={18} />} label="Training" isScrolled={isScrolled} />
            <NavLink to="/about" icon={<Users size={18} />} label="About" isScrolled={isScrolled} />
            <NavLink to="/contact" icon={<Mail size={18} />} label="Contact" isScrolled={isScrolled} />
          </nav>

          <button 
            onClick={toggleMenu} 
            className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen py-4' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-4 bg-white rounded-lg p-4">
            <MobileNavLink to="/" icon={<HomeIcon size={18} />} label="Home" />
            <MobileNavLink to="/drones" icon={<Drone size={18} />} label="Drones" />
            <MobileNavLink to="/software" icon={<Code size={18} />} label="Software" />
            <MobileNavLink to="/training" icon={<GraduationCap size={18} />} label="Training" />
            <MobileNavLink to="/about" icon={<Users size={18} />} label="About" />
            <MobileNavLink to="/contact" icon={<Mail size={18} />} label="Contact" />
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isScrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, icon, label, isScrolled }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`flex items-center space-x-1 transition-colors duration-300 ${
        isActive 
          ? 'text-blue-500 font-medium' 
          : isScrolled 
            ? 'text-gray-700 hover:text-blue-600' 
            : 'text-white hover:text-blue-200'
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
        isActive 
          ? 'bg-blue-50 text-blue-600 font-medium' 
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default Navbar;