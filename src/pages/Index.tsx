import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Shield, TrendingUp, Users, Eye, ExternalLink, Copy, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { sampleFundings, statesAndUTs, departments } from "@/data/indiaData";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: `${type} copied successfully`,
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-government-transparency" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-government-gold" />;
      case 'failed':
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case 'completed':
        return 'default';
      case 'pending':
        return 'secondary';
      case 'failed':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  // Calculate total funding
  const totalFunding = sampleFundings.reduce((sum, funding) => {
    const amount = parseFloat(funding.amount.replace(/[₹,]/g, ''));
    return sum + amount;
  }, 0);

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} L`;
    } else {
      return `₹${amount.toLocaleString()}`;
    }
  };

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

      {/* Recent Transactions Section */}
      <div className="bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Recent Blockchain Transactions</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Live transparency data showing government funding transactions across all states and departments, 
              verified on the Ethereum blockchain.
            </p>
          </div>

          {/* Transaction Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{sampleFundings.length}</div>
                <p className="text-xs text-muted-foreground">Blockchain verified</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-government-transparency">
                  {formatCurrency(totalFunding)}
                </div>
                <p className="text-xs text-muted-foreground">Government funding</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">States Covered</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{new Set(sampleFundings.map(f => f.state)).size}</div>
                <p className="text-xs text-muted-foreground">Active states</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Departments</CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{new Set(sampleFundings.map(f => f.department)).size}</div>
                <p className="text-xs text-muted-foreground">Active departments</p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Transaction Table */}
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Latest Government Funding Transactions
              </CardTitle>
              <CardDescription>
                Complete transaction details including Ethereum addresses and blockchain verification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ethereum Transaction</TableHead>
                      <TableHead>Receiver Details</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Purpose</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>State</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Block</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sampleFundings.map((funding) => {
                      const stateName = statesAndUTs.find(s => s.id === funding.state)?.name || funding.state;
                      const deptName = departments.find(d => d.id === funding.department)?.name || funding.department;
                      
                      return (
                        <TableRow key={funding.id} className="hover:bg-muted/50">
                          <TableCell className="font-mono text-xs">
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <span className="text-xs text-muted-foreground">TX:</span>
                                <span className="truncate max-w-[100px]">{funding.ethereumTxHash}</span>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => copyToClipboard(funding.ethereumTxHash, 'Transaction hash')}
                                  className="h-4 w-4 p-0"
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </div>
                              <div className="text-xs text-muted-foreground">
                                ETH: {funding.amountETH}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="font-mono text-xs">
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <span className="text-xs text-muted-foreground">ID:</span>
                                <span className="text-xs font-medium">{funding.receiverId}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs text-muted-foreground">ETH:</span>
                                <span className="truncate max-w-[80px]">{funding.receiverEthAddress}</span>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => copyToClipboard(funding.receiverEthAddress, 'Receiver address')}
                                  className="h-4 w-4 p-0"
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="font-semibold text-government-transparency">
                                {funding.amount}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {funding.amountETH}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="max-w-[150px]">
                            <div className="truncate text-sm" title={funding.purpose}>
                              {funding.purpose}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {funding.date}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">
                              {deptName}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="text-xs">
                              {stateName}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              {getStatusIcon(funding.status)}
                              <Badge variant={getStatusVariant(funding.status)} className="text-xs">
                                {funding.status}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell className="font-mono text-xs">
                            <div className="space-y-1">
                              <div>#{funding.blockNumber}</div>
                              <div className="text-xs text-muted-foreground">
                                Gas: {funding.gasUsed}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-1">
                              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                <ExternalLink className="h-3 w-3" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              onClick={() => navigate('/dashboard')}
              className="text-lg px-8 py-6"
            >
              <Shield className="mr-2 h-5 w-5" />
              Explore Full Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
