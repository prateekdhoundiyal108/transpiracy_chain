import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, TrendingUp, Users, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center text-white">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <Shield className="h-16 w-16 text-government-gold" />
          <h1 className="text-6xl font-bold">TransparencyChain</h1>
        </div>
        
        <h2 className="text-3xl font-semibold mb-6">
          Government Funding Transparency Platform
        </h2>
        
        <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto">
          Track every rupee of government funding with blockchain transparency. 
          Monitor departmental allocations across all Indian states and union territories 
          for complete accountability and anti-corruption measures.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
            onClick={() => navigate('/login')}
          >
            <Shield className="mr-2 h-5 w-5" />
            Access Platform
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-lg px-8 py-6 bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
            onClick={() => navigate('/dashboard')}
          >
            <Eye className="mr-2 h-5 w-5" />
            Explore Demo
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-16">
          <h3 className="text-3xl font-bold text-center mb-12">Platform Features</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Blockchain Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Every transaction is verified and immutable on the blockchain, 
                  ensuring complete transparency and preventing manipulation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader className="text-center">
                <TrendingUp className="h-12 w-12 text-government-transparency mx-auto mb-4" />
                <CardTitle>Real-time Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Monitor fund allocation and utilization across all government 
                  departments in real-time with detailed analytics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-government-navy mx-auto mb-4" />
                <CardTitle>Public Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Citizen-friendly interface providing easy access to government 
                  funding information for enhanced democratic participation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
