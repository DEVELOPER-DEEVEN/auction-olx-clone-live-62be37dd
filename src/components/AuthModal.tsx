
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Lock, User, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const { toast } = useToast();

  const handleSendOTP = async () => {
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowOTPInput(true);
      toast({
        title: "OTP Sent!",
        description: `Verification code sent to ${email}`,
      });
    }, 1500);
  };

  const handleVerifyOTP = async () => {
    if (!otp || otp.length !== 6) {
      toast({
        title: "Error",
        description: "Please enter a valid 6-digit OTP",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success!",
        description: "Email verified successfully",
      });
      onClose();
      setShowOTPInput(false);
      setEmail("");
      setOTP("");
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            Welcome to OLX Clone
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {!showOTPInput ? (
                <Button 
                  onClick={handleSendOTP} 
                  className="w-full" 
                  disabled={isLoading}
                >
                  {isLoading ? "Sending OTP..." : "Send OTP"}
                </Button>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="otp">Enter OTP</Label>
                    <Input
                      id="otp"
                      type="text"
                      placeholder="6-digit code"
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOTP(e.target.value)}
                      className="text-center text-lg tracking-wider"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      onClick={handleVerifyOTP} 
                      className="flex-1" 
                      disabled={isLoading}
                    >
                      {isLoading ? "Verifying..." : "Verify OTP"}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowOTPInput(false)}
                    >
                      Back
                    </Button>
                  </div>
                </>
              )}
            </div>
          </TabsContent>

          <TabsContent value="register" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="register-name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="register-name"
                    type="text"
                    placeholder="Enter your full name"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="register-phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {!showOTPInput ? (
                <Button 
                  onClick={handleSendOTP} 
                  className="w-full bg-orange-500 hover:bg-orange-600" 
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="register-otp">Verify Email with OTP</Label>
                    <Input
                      id="register-otp"
                      type="text"
                      placeholder="6-digit code"
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOTP(e.target.value)}
                      className="text-center text-lg tracking-wider"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      onClick={handleVerifyOTP} 
                      className="flex-1 bg-orange-500 hover:bg-orange-600" 
                      disabled={isLoading}
                    >
                      {isLoading ? "Verifying..." : "Complete Registration"}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowOTPInput(false)}
                    >
                      Back
                    </Button>
                  </div>
                </>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
