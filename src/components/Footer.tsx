import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">MIGRATE</h3>
          <p className="text-sm text-gray-300">
            Your trusted destination for quality tech products.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/products" className="text-sm hover:text-secondary transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link to="/categories" className="text-sm hover:text-secondary transition-colors">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm hover:text-secondary transition-colors">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Customer Service</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/contact" className="text-sm hover:text-secondary transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="text-sm hover:text-secondary transition-colors">
                Shipping Information
              </Link>
            </li>
            <li>
              <Link to="/returns" className="text-sm hover:text-secondary transition-colors">
                Returns Policy
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:text-secondary transition-colors">
              Facebook
            </a>
            <a href="#" className="text-sm hover:text-secondary transition-colors">
              Twitter
            </a>
            <a href="#" className="text-sm hover:text-secondary transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-700">
        <p className="text-sm text-center text-gray-300">
          © {new Date().getFullYear()} MIGRATE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};