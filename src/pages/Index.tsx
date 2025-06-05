
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Heart, User, Plus, TrendingUp, Zap } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import AuctionCard from "@/components/AuctionCard";
import CategoryGrid from "@/components/CategoryGrid";
import AuthModal from "@/components/AuthModal";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuctionStore } from "@/hooks/useAuctionStore";
import { useFavorites } from "@/hooks/useFavorites";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { auctions } = useAuctionStore();
  const { favorites } = useFavorites();

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-950 dark:to-gray-900">
      {/* Glassmorphic Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/5 dark:bg-white/5 border-b border-black/10 dark:border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white dark:text-black" />
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  OLX Pro
                </h1>
              </div>
              <div className="hidden md:flex items-center space-x-3 glass rounded-2xl px-6 py-3 shadow-lg">
                <Search className="h-5 w-5 text-black/70 dark:text-white/70" />
                <Input
                  placeholder="Search amazing products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 bg-transparent focus:ring-0 w-96 dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center space-x-2 glass hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
              >
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Favorites ({favorites.length})</span>
              </Button>
              <Button 
                onClick={() => setIsAuthModalOpen(true)}
                variant="outline" 
                size="sm" 
                className="flex items-center space-x-2 glass hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Login</span>
              </Button>
              <Button 
                size="sm" 
                className="flex items-center space-x-2 bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 shadow-lg shadow-black/25 transition-all duration-300 transform hover:scale-105"
              >
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">Sell</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Modern Design */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-gray-500/5 to-black/10 dark:from-white/5 dark:via-gray-400/5 dark:to-white/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23000&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20 dark:bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23FFF&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-black via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-100 bg-clip-text text-transparent leading-tight">
              Buy, Sell, Bid
              <br />
              <span className="text-5xl">All in One Place</span>
            </h2>
            <p className="text-xl mb-12 text-black/70 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
              Discover amazing deals, join live auctions, and connect with a community of buyers and sellers
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button 
                size="lg" 
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 px-8 py-4 text-lg shadow-xl shadow-black/25 transform hover:scale-105 transition-all duration-300"
              >
                <Plus className="mr-2 h-5 w-5" />
                Start Selling Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg glass hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                Browse Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Browse Categories
            </h3>
            <p className="text-lg text-black/70 dark:text-white/70">Find exactly what you&apos;re looking for</p>
          </div>
          <CategoryGrid />
        </div>
      </section>

      {/* Live Auctions Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 glass"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent flex items-center">
                🔥 Live Auctions
              </h3>
              <p className="text-lg text-black/70 dark:text-white/70">Bid now on trending items</p>
            </div>
            <Button 
              variant="outline" 
              className="glass hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
            >
              View All Auctions
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auctions.map((auction) => (
              <div key={auction.id} className="transform hover:scale-105 transition-all duration-300">
                <AuctionCard auction={auction} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Featured Products
              </h3>
              <p className="text-lg text-black/70 dark:text-white/70">Handpicked deals just for you</p>
            </div>
            <Button 
              variant="outline"
              className="glass hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
            >
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="transform hover:scale-105 transition-all duration-300">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 dark:from-gray-950 dark:via-black dark:to-gray-950 text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23FFF&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Zap className="h-7 w-7 text-black" />
                </div>
                <h4 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  OLX Pro
                </h4>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Your trusted marketplace for buying, selling, and bidding on amazing products. 
                Join millions of users worldwide.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <span className="text-sm font-bold">ig</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">About Us</li>
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">How It Works</li>
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Safety Tips</li>
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Help Center</li>
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Terms of Service</li>
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Report Issue</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-16 pt-8 text-center">
            <p className="text-gray-400">© 2024 OLX Pro. All rights reserved. Built with ❤️ for the community.</p>
          </div>
        </div>
      </footer>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
};

export default Index;
