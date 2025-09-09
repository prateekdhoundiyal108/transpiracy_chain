import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, ExternalLink, Copy, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { statesAndUTs, departments, sampleFundings } from "@/data/indiaData";
import { useToast } from "@/hooks/use-toast";

const DepartmentDetail = () => {
  const { stateId, departmentId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const state = statesAndUTs.find(s => s.id === stateId);
  const department = departments.find(d => d.id === departmentId);
  
  // Filter sample fundings for this department/state
  const departmentFundings = sampleFundings.filter(
    funding => funding.department === departmentId && funding.state === stateId
  );

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Transaction ID copied successfully",
    });
  };

  if (!state || !department) {
    return <div>State or Department not found</div>;
  }

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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{department.icon}</span>
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
            Dashboard
          </Button>
          <span className="text-muted-foreground">/</span>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate(`/state/${stateId}`)}
            className="text-muted-foreground hover:text-foreground"
          >
            {state.name}
          </Button>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">{department.name}</span>
        </div>

        {/* Department Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-4xl">{department.icon}</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">{department.name}</h1>
              <p className="text-lg text-muted-foreground">{state.name}</p>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-6">{department.description}</p>
          
          {/* Department Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Funding</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹2,50,00,000</div>
                <p className="text-xs text-muted-foreground">Current fiscal year</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{departmentFundings.length}</div>
                <p className="text-xs text-muted-foreground">Verified on blockchain</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {departmentFundings.filter(f => f.status === 'completed').length}
                </div>
                <p className="text-xs text-muted-foreground">Successfully processed</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-government-transparency">100%</div>
                <p className="text-xs text-muted-foreground">Blockchain verified</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Funding Transactions */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Funding Transactions</h2>
          
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Recent Funding Details</CardTitle>
              <CardDescription>
                All transactions are verified on the blockchain for maximum transparency
              </CardDescription>
            </CardHeader>
            <CardContent>
              {departmentFundings.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Receiver ID</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Purpose</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {departmentFundings.map((funding) => (
                      <TableRow key={funding.id}>
                        <TableCell className="font-mono text-sm">
                          <div className="flex items-center space-x-2">
                            <span className="truncate max-w-[120px]">{funding.transactionId}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(funding.transactionId)}
                              className="h-6 w-6 p-0"
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell className="font-mono text-sm">{funding.receiverId}</TableCell>
                        <TableCell className="font-semibold text-government-transparency">
                          {funding.amount}
                        </TableCell>
                        <TableCell>{funding.purpose}</TableCell>
                        <TableCell>{funding.date}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(funding.status)}
                            <Badge variant={getStatusVariant(funding.status)}>
                              {funding.status}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No funding transactions found for this department.</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    This could mean no recent activity or data is still being indexed.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;