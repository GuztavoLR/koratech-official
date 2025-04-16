import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Updated navLinks
  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#why-koratech' }, // Pointing to Why Koratech as 'About'
  ];

  // Provided Logo URL
  const logoUrl = "https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/logo.png";
  const ctaText = "Fale Conosco";
  const ctaHref = "#cta"; // Link CTA button to the CTA section

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-koratech-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center flex-shrink-0">
          {/* Increased logo size */}
          <img src={logoUrl} alt="Koratech Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation & CTA */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              // Applied font-semibold for better visibility
              className="text-koratech-black hover:text-koratech-blue transition-colors duration-300 font-semibold"
            >
              {link.name}
            </a>
          ))}
          {/* CTA Button - Desktop */}
          <a
            href={ctaHref}
            className="bg-koratech-blue text-koratech-black font-bold py-2 px-5 rounded hover:opacity-90 transition-opacity duration-300 text-sm"
          >
            {ctaText}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={28} className="text-koratech-black" /> : <Menu size={28} className="text-koratech-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 ${isScrolled ? 'bg-koratech-white' : 'bg-koratech-white/95 backdrop-blur-sm'} shadow-lg py-4`}>
          <div className="container mx-auto px-4 flex flex-col space-y-4 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                // Applied font-semibold for better visibility
                className="text-koratech-black hover:text-koratech-blue transition-colors duration-300 font-semibold text-center py-2"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                {link.name}
              </a>
            ))}
            {/* CTA Button - Mobile */}
            <a
              href={ctaHref}
              className="bg-koratech-blue text-koratech-black font-bold py-2 px-5 rounded hover:opacity-90 transition-opacity duration-300 text-sm mt-2"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
            >
              {ctaText}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
