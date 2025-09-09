import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Users, IndianRupee, Shield } from "lucide-react";
import { useState } from "react";
import { statesAndUTs } from "@/data/indiaData";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredStates = statesAndUTs.filter(state =>
    state.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total States & UTs</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{statesAndUTs.length}</div>
              <p className="text-xs text-muted-foreground">
                28 States + 8 Union Territories
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Departments Tracked</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6+</div>
              <p className="text-xs text-muted-foreground">
                Major government departments
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Funds Tracked</CardTitle>
              <IndianRupee className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹2.5L Cr</div>
              <p className="text-xs text-muted-foreground">
                Total transparency value
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search and States Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <h2 className="text-3xl font-bold">Select State or Union Territory</h2>
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search states and UTs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredStates.map((item) => (
              <Card 
                key={item.id} 
                className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-200 cursor-pointer group border-l-4 border-l-primary"
                onClick={() => navigate(`/state/${item.id}`)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {item.name}
                    </CardTitle>
                    <Badge 
                      variant={item.type === 'state' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {item.type === 'state' ? 'State' : 'UT'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    View department-wise funding and transparency data
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredStates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No states or UTs found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;