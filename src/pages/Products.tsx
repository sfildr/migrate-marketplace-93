import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Product } from "@/lib/types";

// Mock data for demonstration
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Gaming Laptop",
    description: "High-performance gaming laptop with RTX 3080",
    price: 1999.99,
    image: "https://picsum.photos/400/400",
    category: "Laptops",
    featured: true,
  },
  {
    id: "2",
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with Cherry MX switches",
    price: 129.99,
    image: "https://picsum.photos/400/400",
    category: "Peripherals",
  },
  {
    id: "3",
    name: "Gaming Mouse",
    description: "High-DPI gaming mouse with programmable buttons",
    price: 79.99,
    image: "https://picsum.photos/400/400",
    category: "Peripherals",
  },
  // Add more mock products as needed
];

const categories = ["All", "Laptops", "Peripherals", "Components", "Accessories"];

export default function Products() {
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = mockProducts.filter((product) => {
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesPrice && matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <Card className="p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          
          {/* Search */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Search</h3>
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Price Range</h3>
            <Slider
              defaultValue={[0, 2000]}
              max={2000}
              step={10}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Categories</h3>
            <ScrollArea className="h-[200px]">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2 mb-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedCategories([...selectedCategories, category]);
                      } else {
                        setSelectedCategories(
                          selectedCategories.filter((c) => c !== category)
                        );
                      }
                    }}
                  />
                  <label
                    htmlFor={category}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </ScrollArea>
          </div>
        </Card>

        {/* Products Grid */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}