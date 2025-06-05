
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";

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
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const isProductFavorited = isFavorite(product.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isProductFavorited) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product.id);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group glass hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
            isProductFavorited 
              ? 'bg-black text-white dark:bg-white dark:text-black' 
              : 'glass text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10'
          }`}
        >
          <Heart className={`h-4 w-4 ${isProductFavorited ? 'fill-current' : ''}`} />
        </button>
        {product.isNegotiable && (
          <Badge className="absolute top-3 left-3 bg-black text-white dark:bg-white dark:text-black">
            Negotiable
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-black/70 dark:group-hover:text-white/70 transition-colors">
          {product.title}
        </h3>
        <p className="text-2xl font-bold text-black dark:text-white mb-2">
          {formatPrice(product.price)}
        </p>
        <div className="flex items-center text-black/60 dark:text-white/60 text-sm mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          {product.location}
        </div>
        <p className="text-sm text-black/50 dark:text-white/50">
          Seller: {product.seller}
        </p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
