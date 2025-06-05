
import { Card, CardContent } from "@/components/ui/card";
import { 
  Car, 
  Home, 
  Laptop, 
  Phone, 
  Briefcase, 
  Heart, 
  Shirt, 
  Book 
} from "lucide-react";

const CategoryGrid = () => {
  const categories = [
    { id: 1, name: "Electronics", icon: <Laptop className="h-8 w-8" />, color: "bg-blue-100 text-blue-600" },
    { id: 2, name: "Vehicles", icon: <Car className="h-8 w-8" />, color: "bg-green-100 text-green-600" },
    { id: 3, name: "Real Estate", icon: <Home className="h-8 w-8" />, color: "bg-purple-100 text-purple-600" },
    { id: 4, name: "Mobiles", icon: <Phone className="h-8 w-8" />, color: "bg-orange-100 text-orange-600" },
    { id: 5, name: "Jobs", icon: <Briefcase className="h-8 w-8" />, color: "bg-red-100 text-red-600" },
    { id: 6, name: "Services", icon: <Heart className="h-8 w-8" />, color: "bg-pink-100 text-pink-600" },
    { id: 7, name: "Fashion", icon: <Shirt className="h-8 w-8" />, color: "bg-indigo-100 text-indigo-600" },
    { id: 8, name: "Books", icon: <Book className="h-8 w-8" />, color: "bg-yellow-100 text-yellow-600" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
      {categories.map((category) => (
        <Card 
          key={category.id} 
          className="hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1"
        >
          <CardContent className="p-4 text-center">
            <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-2`}>
              {category.icon}
            </div>
            <p className="text-sm font-medium">{category.name}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CategoryGrid;
