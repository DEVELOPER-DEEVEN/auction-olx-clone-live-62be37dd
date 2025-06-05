
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useAuctionStore } from '@/hooks/useAuctionStore';
import { useToast } from '@/hooks/use-toast';

interface BidModalProps {
  auctionId: number;
  isOpen: boolean;
  onClose: () => void;
}

export function BidModal({ auctionId, isOpen, onClose }: BidModalProps) {
  const { getAuction, updateBid } = useAuctionStore();
  const auction = getAuction(auctionId);
  const [bidAmount, setBidAmount] = useState('');
  const { toast } = useToast();

  const handlePlaceBid = () => {
    if (!auction) return;
    
    const bid = parseInt(bidAmount);
    if (bid < auction.minBid) {
      toast({
        title: "Bid too low",
        description: `Minimum bid is ₹${auction.minBid.toLocaleString()}`,
        variant: "destructive",
      });
      return;
    }

    updateBid(auctionId, bid);
    toast({
      title: "Bid placed successfully!",
      description: `Your bid of ₹${bid.toLocaleString()} has been placed.`,
    });
    setBidAmount('');
    onClose();
  };

  if (!auction) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Place Bid</DialogTitle>
          <DialogDescription>
            {auction.title}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="currentBid" className="text-right">
              Current Bid
            </Label>
            <div className="col-span-3 text-lg font-semibold">
              ₹{auction.currentBid.toLocaleString()}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="minBid" className="text-right">
              Minimum Bid
            </Label>
            <div className="col-span-3 text-lg font-semibold text-orange-600">
              ₹{auction.minBid.toLocaleString()}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bidAmount" className="text-right">
              Your Bid
            </Label>
            <Input
              id="bidAmount"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              placeholder="Enter amount"
              className="col-span-3"
              type="number"
              min={auction.minBid}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handlePlaceBid} disabled={!bidAmount}>
            Place Bid
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
