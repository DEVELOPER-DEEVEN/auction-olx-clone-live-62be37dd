
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Star, 
  Package, 
  Gavel,
  Heart,
  Settings
} from "lucide-react";

const UserProfile = () => {
  const userStats = [
    { label: "Products Sold", value: 24, icon: <Package className="h-4 w-4" /> },
    { label: "Auctions Won", value: 8, icon: <Gavel className="h-4 w-4" /> },
    { label: "Rating", value: "4.8", icon: <Star className="h-4 w-4" /> },
    { label: "Favorites", value: 15, icon: <Heart className="h-4 w-4" /> }
  ];

  const recentListings = [
    { id: 1, title: "iPhone 13 Pro", price: 45000, status: "Active", bids: 5 },
    { id: 2, title: "Laptop Gaming", price: 80000, status: "Sold", bids: 12 },
    { id: 3, title: "Camera DSLR", price: 35000, status: "Auction", bids: 8 }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start space-x-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=100" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold">John Doe</h1>
                  <p className="text-gray-600 flex items-center mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    Mumbai, Maharashtra
                  </p>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-medium">4.8</span>
                    <span className="text-gray-500 ml-1">(127 reviews)</span>
                  </div>
                </div>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Settings className="h-4 w-4" />
                  <span>Edit Profile</span>
                </Button>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-6">
                {userStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2 text-blue-600">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Tabs */}
      <Tabs defaultValue="listings" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="listings">My Listings</TabsTrigger>
          <TabsTrigger value="bids">My Bids</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="listings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Listings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentListings.map((listing) => (
                  <div key={listing.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{listing.title}</h3>
                      <p className="text-sm text-gray-600">₹{listing.price.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge variant={listing.status === 'Active' ? 'default' : listing.status === 'Sold' ? 'secondary' : 'destructive'}>
                        {listing.status}
                      </Badge>
                      <span className="text-sm text-gray-500">{listing.bids} bids</span>
                      <Button size="sm" variant="outline">View</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bids" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Bids</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                <Gavel className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No active bids at the moment</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="favorites" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Favorite Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                <Heart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No favorite items yet</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input id="full-name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+91 9876543210" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="Mumbai, Maharashtra" />
                </div>
              </div>
              <Button className="w-full">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserProfile;
