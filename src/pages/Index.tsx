
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Heart, User, Plus } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import AuctionCard from "@/components/AuctionCard";
import CategoryGrid from "@/components/CategoryGrid";
import AuthModal from "@/components/AuthModal";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for products
  const featuredProducts = [
    {
      id: 1,
      title: "iPhone 14 Pro Max",
      price: 45000,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400",
      location: "Mumbai, Maharashtra",
      isNegotiable: true,
      seller: "John Doe"
    },
    {
      id: 2,
      title: "MacBook Pro M2",
      price: 120000,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
      location: "Delhi, Delhi",
      isNegotiable: false,
      seller: "Tech Store"
    },
    {
      id: 3,
      title: "Honda City 2020",
      price: 800000,
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400",
      location: "Bangalore, Karnataka",
      isNegotiable: true,
      seller: "Car Dealer"
    }
  ];

  // Mock data for live auctions
  const liveAuctions = [
    {
      id: 1,
      title: "Vintage Camera Collection",
      currentBid: 15000,
      minBid: 16000,
      timeLeft: "2h 45m",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
      totalBids: 23,
      seller: "Vintage Collector"
    },
    {
      id: 2,
      title: "Gaming Setup Complete",
      currentBid: 55000,
      minBid: 60000,
      timeLeft: "5h 12m",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400",
      totalBids: 45,
      seller: "Gamer Pro"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-blue-600">OLX Clone</h1>
              <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
                <Search className="h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 bg-transparent focus:ring-0 w-96"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Favorites</span>
              </Button>
              <Button 
                onClick={() => setIsAuthModalOpen(true)}
                variant="outline" 
                size="sm" 
                className="flex items-center space-x-2"
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Login</span>
              </Button>
              <Button size="sm" className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600">
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">Sell</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Buy, Sell, Bid - All in One Place</h2>
          <p className="text-xl mb-8 opacity-90">Discover amazing deals and join live auctions</p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Start Selling
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Browse Products
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold mb-8">Browse Categories</h3>
          <CategoryGrid />
        </div>
      </section>

      {/* Live Auctions */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">🔥 Live Auctions</h3>
            <Button variant="outline">View All Auctions</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveAuctions.map((auction) => (
              <AuctionCard key={auction.id} auction={auction} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">Featured Products</h3>
            <Button variant="outline">View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">OLX Clone</h4>
              <p className="text-gray-300">Your trusted marketplace for buying, selling, and bidding on amazing products.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>About Us</li>
                <li>How It Works</li>
                <li>Safety Tips</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Electronics</li>
                <li>Vehicles</li>
                <li>Real Estate</li>
                <li>Jobs</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Help Center</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Report Issue</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
};

export default Index;
