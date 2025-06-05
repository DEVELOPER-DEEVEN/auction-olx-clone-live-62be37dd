
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, TrendingUp } from "lucide-react";
import { BidModal } from "./BidModal";
import { useAuctionStore, type Auction } from "@/hooks/useAuctionStore";

interface AuctionCardProps {
  auction: Auction;
}

const AuctionCard = ({ auction }: AuctionCardProps) => {
  const [isBidModalOpen, setIsBidModalOpen] = useState(false);
  const { auctions } = useAuctionStore();
  
  // Get real-time data from store
  const currentAuction = auctions.find(a => a.id === auction.id) || auction;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-orange-200">
        <div className="relative">
          <img
            src={currentAuction.image}
            alt={currentAuction.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <Badge className="absolute top-3 left-3 bg-red-500 animate-pulse">
            LIVE
          </Badge>
          <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {currentAuction.timeLeft}
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-orange-600 transition-colors">
            {currentAuction.title}
          </h3>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Current Bid:</span>
              <span className="text-lg font-bold text-green-600">
                {formatPrice(currentAuction.currentBid)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Next Bid:</span>
              <span className="text-lg font-semibold text-orange-600">
                {formatPrice(currentAuction.minBid)}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {currentAuction.totalBids} bids
            </div>
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              {currentAuction.seller}
            </div>
          </div>
          <Button 
            className="w-full bg-orange-500 hover:bg-orange-600"
            onClick={() => setIsBidModalOpen(true)}
          >
            Place Bid
          </Button>
        </CardContent>
      </Card>
      <BidModal
        auctionId={currentAuction.id}
        isOpen={isBidModalOpen}
        onClose={() => setIsBidModalOpen(false)}
      />
    </>
  );
};

export default AuctionCard;
