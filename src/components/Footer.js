import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img className="h-8 w-auto" src="/logo.png" alt="Qualis Designers" />
            <p className="text-sm">
              Empowering businesses through innovative web solutions and expert programming education.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/QualisDesigners" className="hover:text-primary">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/edward-kamwi" className="hover:text-primary">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-primary">Web Design</Link></li>
              <li><Link to="/services" className="hover:text-primary">Web Development</Link></li>
              <li><Link to="/tutoring" className="hover:text-primary">Programming Tutoring</Link></li>
              <li><Link to="/services" className="hover:text-primary">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: info@qualisdesigners.com</li>
              <li>Phone: +264 XX XXX XXX</li>
              <li>Windhoek, Namibia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Qualis Designers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 