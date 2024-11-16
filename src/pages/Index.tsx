import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

const featuredProducts = [
  {
    id: '1',
    name: 'Premium Laptop',
    description: 'High-performance laptop for professionals',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    category: 'Laptops',
    featured: true,
  },
  {
    id: '2',
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with long battery life',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46',
    category: 'Accessories',
    featured: true,
  },
  // Add more mock products as needed
];

const categories = [
  { name: 'Laptops', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46' },
];

const pricingPlans = [
  {
    name: "Starter",
    price: 600,
    features: [
      "Marketing",
      "Tráfego Pago",
      "4 Cards Mensais"
    ]
  },
  {
    name: "Premium",
    price: 1100,
    features: [
      "Tráfego Pago",
      "Google ADS",
      "5 Vídeos",
      "8 Postagens por mês"
    ]
  },
  {
    name: "Black",
    price: 2000,
    features: [
      "Todos os benefícios Premium",
      "+5 Vídeos",
      "Software de gestão CRM",
      "Atendimento automatizado WhatsApp",
      "Website Landing Page",
      "Suporte por 1 ano"
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-b from-primary to-primary/90 text-white flex items-center">
        <div className="container mx-auto py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Transforme seu Marketing Digital
            </h1>
            <p className="text-xl mb-8 text-gray-200 animate-fade-in">
              Soluções completas para impulsionar seu negócio no mundo digital.
              Marketing estratégico, tráfego pago e resultados comprovados.
            </p>
            <Link to="/products">
              <Button size="lg" variant="secondary" className="animate-fade-in">
                Comece Agora <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/products?category=${category.name}`}
                className="relative group overflow-hidden rounded-lg"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Planos e Preços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <Card key={plan.name} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-3xl font-bold mb-6">
                  R$ {plan.price}
                  <span className="text-sm font-normal">/mês</span>
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant="secondary">
                  Escolher Plano
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
