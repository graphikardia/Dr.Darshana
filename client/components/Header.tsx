import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/videos", label: "Videos" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="font-bold text-primary text-lg">DR</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold">Dr. Darshana</h1>
              <p className="text-xs opacity-90">Internal Medicine</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  isActive(link.href) && "text-accent border-b-2 border-accent pb-1"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Book Appointment
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-primary-foreground/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-2 text-sm font-medium transition-colors hover:text-accent",
                  isActive(link.href) && "text-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold text-center hover:opacity-90"
            >
              Book Appointment
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
