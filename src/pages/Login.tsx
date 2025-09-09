import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Wallet, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleWalletConnect = () => {
    // Simulate wallet connection
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Hero Section */}
        <div className="text-white space-y-6">
          <div className="flex items-center space-x-3">
            <Shield className="h-12 w-12 text-government-gold" />
            <h1 className="text-4xl font-bold">TransparencyChain</h1>
          </div>
          <h2 className="text-2xl font-semibold">Government Funding Transparency Platform</h2>
          <p className="text-lg opacity-90">
            Track every rupee of government funding with blockchain transparency. 
            Monitor departmental allocations across all Indian states and union territories.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-government-gold" />
              <span>Real-time funding transparency</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-government-gold" />
              <span>Blockchain-verified transactions</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-government-gold" />
              <span>Department-wise fund tracking</span>
            </div>
          </div>
        </div>

        {/* Login Card */}
        <Card className="bg-card/95 backdrop-blur-sm shadow-elevated">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Connect Your Wallet</CardTitle>
            <CardDescription>
              Secure access to government funding transparency data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Button 
              onClick={handleWalletConnect}
              className="w-full h-12 text-lg bg-gradient-primary hover:opacity-90 transition-opacity"
              size="lg"
            >
              <Wallet className="mr-3 h-5 w-5" />
              Connect Web3 Wallet
            </Button>
            
            <div className="text-center text-sm text-muted-foreground">
              <p>Supported wallets: MetaMask, WalletConnect, Coinbase Wallet</p>
            </div>
            
            <div className="border-t pt-4">
              <p className="text-xs text-muted-foreground text-center">
                By connecting, you agree to access government transparency data 
                in accordance with digital governance policies.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;