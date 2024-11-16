import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const cartItems = useCartStore((state) => state.items);
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="bg-primary text-primary-foreground py-4 fixed w-full top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            MIGRATE
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/products" className="hover:text-secondary transition-colors">
              Products
            </Link>
            <Link to="/categories" className="hover:text-secondary transition-colors">
              Categories
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
            <Link to="/auth">
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          <button className="md:hidden" onClick={toggleMenu}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed top-0 right-0 h-full w-[60vw] bg-primary text-primary-foreground transform transition-transform duration-300 ease-in-out z-50",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="p-4">
          <button onClick={toggleMenu} className="mb-8">
            <X className="w-6 h-6" />
          </button>
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-xl font-bold" onClick={toggleMenu}>
              MIGRATE
            </Link>
            <Link to="/products" className="hover:text-secondary transition-colors" onClick={toggleMenu}>
              Products
            </Link>
            <Link to="/categories" className="hover:text-secondary transition-colors" onClick={toggleMenu}>
              Categories
            </Link>
            <Link to="/cart" className="relative" onClick={toggleMenu}>
              Cart ({itemCount})
            </Link>
            <Link to="/auth" onClick={toggleMenu}>
              Account
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};