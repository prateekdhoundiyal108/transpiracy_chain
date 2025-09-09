import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, TrendingUp } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { statesAndUTs, departments } from "@/data/indiaData";

const StateDetail = () => {
  const { stateId } = useParams();
  const navigate = useNavigate();
  
  const state = statesAndUTs.find(s => s.id === stateId);
  
  if (!state) {
    return <div>State not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">TransparencyChain</h1>
          </div>
          <Button variant="outline" onClick={() => navigate('/login')}>
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-6">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/dashboard')}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Dashboard
          </Button>
        </div>

        {/* State Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">{state.name}</h1>
              <div className="flex items-center space-x-3">
                <Badge variant={state.type === 'state' ? 'default' : 'secondary'}>
                  {state.type === 'state' ? 'State' : 'Union Territory'}
                </Badge>
                <span className="text-muted-foreground">Government Departments</span>
              </div>
            </div>
          </div>
          
          {/* State Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Departments</CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{departments.length}</div>
                <p className="text-xs text-muted-foreground">Active departments</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Funds Allocated</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹15,240 Cr</div>
                <p className="text-xs text-muted-foreground">Current fiscal year</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Transparency Score</CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-government-transparency">94%</div>
                <p className="text-xs text-muted-foreground">Blockchain verified</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Departments Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Government Departments</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <Card 
                key={dept.id}
                className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-200 cursor-pointer group border-l-4 border-l-secondary"
                onClick={() => navigate(`/state/${stateId}/department/${dept.id}`)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{dept.icon}</span>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {dept.name}
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {dept.description}
                  </CardDescription>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Active Projects</span>
                    <Badge variant="outline">12</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateDetail;