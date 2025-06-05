
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  location: string;
  isNegotiable: boolean;
  seller: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorited(!isFavorited);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
            isFavorited 
              ? 'bg-red-500 text-white' 
              : 'bg-white/80 text-gray-600 hover:bg-white'
          }`}
        >
          <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
        </button>
        {product.isNegotiable && (
          <Badge className="absolute top-3 left-3 bg-green-500">
            Negotiable
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        <p className="text-2xl font-bold text-green-600 mb-2">
          {formatPrice(product.price)}
        </p>
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          {product.location}
        </div>
        <p className="text-sm text-gray-600">
          Seller: {product.seller}
        </p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
