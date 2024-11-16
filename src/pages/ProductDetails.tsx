import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart';
import { toast } from 'sonner';
import { Star } from 'lucide-react';
import { Product } from '@/lib/types';

const ProductDetails = () => {
  const { id } = useParams();
  const addItem = useCartStore((state) => state.addItem);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data (replace with actual data fetching)
  const product: Product = {
    id: id || "1",
    name: "Premium Laptop",
    price: 1299.99,
    description: "High-performance laptop perfect for professionals and creative work. Features the latest processor, ample storage, and a stunning display.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Laptops",
    featured: true,
    specifications: [
      "Latest generation processor",
      "16GB RAM",
      "512GB SSD",
      "15.6\" 4K Display"
    ],
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
    ],
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        comment: "Excelente produto, superou minhas expectativas!"
      },
      {
        id: 2,
        user: "Jane Smith",
        rating: 4,
        comment: "Muito bom, mas poderia ser um pouco mais barato."
      }
    ]
  };

  const handleAddToCart = () => {
    const cartProduct: Product = {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      category: product.category,
      featured: product.featured
    };
    addItem(cartProduct);
    toast.success('Produto adicionado ao carrinho');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-secondary' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-bold">R$ {product.price.toFixed(2)}</p>
            <p className="text-gray-600">{product.description}</p>
            
            <div>
              <h2 className="text-xl font-semibold mb-2">Especificações</h2>
              <ul className="list-disc list-inside space-y-2">
                {product.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            <Button onClick={handleAddToCart} size="lg" className="w-full">
              Adicionar ao Carrinho
            </Button>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Avaliações dos Clientes</h2>
          <div className="space-y-6">
            {product.reviews.map((review) => (
              <div key={review.id} className="border-b pb-6">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating ? 'fill-current' : 'stroke-current'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold">{review.user}</span>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetails;