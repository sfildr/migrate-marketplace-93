import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Star, StarHalf, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart';
import { toast } from 'sonner';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Mock product data (replace with actual API call)
const getProduct = (id: string) => {
  return {
    id,
    name: 'Gaming Laptop',
    description: 'High-performance gaming laptop with RTX 3080',
    price: 1999.99,
    images: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      'https://images.unsplash.com/photo-1518770660439-4636190af475',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
    ],
    specs: {
      processor: 'Intel Core i9-12900H',
      gpu: 'NVIDIA RTX 3080',
      ram: '32GB DDR5',
      storage: '1TB NVMe SSD'
    },
    category: 'Laptops',
    rating: 4.5,
    reviews: [
      {
        id: '1',
        user: 'John Doe',
        rating: 5,
        comment: 'Excellent performance for gaming and work!',
        date: '2024-02-15'
      },
      {
        id: '2',
        user: 'Jane Smith',
        rating: 4,
        comment: 'Great laptop, but runs a bit hot under heavy load.',
        date: '2024-02-10'
      }
    ]
  };
};

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const { data: product } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(id || '1'),
  });

  if (!product) return null;

  const handleAddToCart = () => {
    addItem({ ...product, quantity });
    toast.success('Added to cart');
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="fill-yellow-400 text-yellow-400 w-5 h-5" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="fill-yellow-400 text-yellow-400 w-5 h-5" />);
    }

    return stars;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {product.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-square relative">
                      <img
                        src={image}
                        alt={`${product.name} - Image ${index + 1}`}
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center space-x-2">
              {renderStars(product.rating)}
              <span className="text-sm text-gray-500">
                ({product.reviews.length} reviews)
              </span>
            </div>
            <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
            <p className="text-gray-600">{product.description}</p>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button
              className="w-full"
              size="lg"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="p-4 bg-gray-50 rounded-lg">
                <span className="font-medium capitalize">{key}:</span>{' '}
                <span className="text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          <div className="space-y-4">
            {product.reviews.map((review) => (
              <div key={review.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{review.user}</span>
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;