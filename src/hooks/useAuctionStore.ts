
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

export interface Auction {
  id: number;
  title: string;
  currentBid: number;
  minBid: number;
  timeLeft: string;
  image: string;
  totalBids: number;
  seller: string;
  isActive: boolean;
  endTime: Date;
}

interface AuctionStore {
  auctions: Auction[];
  addAuction: (auction: Auction) => void;
  updateBid: (auctionId: number, newBid: number) => void;
  getAuction: (id: number) => Auction | undefined;
}

export const useAuctionStore = create<AuctionStore>()(
  subscribeWithSelector((set, get) => ({
    auctions: [
      {
        id: 1,
        title: "Vintage Camera Collection",
        currentBid: 15000,
        minBid: 16000,
        timeLeft: "2h 45m",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
        totalBids: 23,
        seller: "Vintage Collector",
        isActive: true,
        endTime: new Date(Date.now() + 2 * 60 * 60 * 1000 + 45 * 60 * 1000)
      },
      {
        id: 2,
        title: "Gaming Setup Complete",
        currentBid: 55000,
        minBid: 60000,
        timeLeft: "5h 12m",
        image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400",
        totalBids: 45,
        seller: "Gamer Pro",
        isActive: true,
        endTime: new Date(Date.now() + 5 * 60 * 60 * 1000 + 12 * 60 * 1000)
      }
    ],
    addAuction: (auction) =>
      set((state) => ({ auctions: [...state.auctions, auction] })),
    updateBid: (auctionId, newBid) =>
      set((state) => ({
        auctions: state.auctions.map((auction) =>
          auction.id === auctionId
            ? {
                ...auction,
                currentBid: newBid,
                minBid: newBid + 1000,
                totalBids: auction.totalBids + 1,
              }
            : auction
        ),
      })),
    getAuction: (id) => get().auctions.find((auction) => auction.id === id),
  }))
);
