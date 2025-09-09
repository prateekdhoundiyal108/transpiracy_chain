// India States and Union Territories with departments
export const statesAndUTs = [
  // States
  { id: 'andhra-pradesh', name: 'Andhra Pradesh', type: 'state' },
  { id: 'arunachal-pradesh', name: 'Arunachal Pradesh', type: 'state' },
  { id: 'assam', name: 'Assam', type: 'state' },
  { id: 'bihar', name: 'Bihar', type: 'state' },
  { id: 'chhattisgarh', name: 'Chhattisgarh', type: 'state' },
  { id: 'goa', name: 'Goa', type: 'state' },
  { id: 'gujarat', name: 'Gujarat', type: 'state' },
  { id: 'haryana', name: 'Haryana', type: 'state' },
  { id: 'himachal-pradesh', name: 'Himachal Pradesh', type: 'state' },
  { id: 'jharkhand', name: 'Jharkhand', type: 'state' },
  { id: 'karnataka', name: 'Karnataka', type: 'state' },
  { id: 'kerala', name: 'Kerala', type: 'state' },
  { id: 'madhya-pradesh', name: 'Madhya Pradesh', type: 'state' },
  { id: 'maharashtra', name: 'Maharashtra', type: 'state' },
  { id: 'manipur', name: 'Manipur', type: 'state' },
  { id: 'meghalaya', name: 'Meghalaya', type: 'state' },
  { id: 'mizoram', name: 'Mizoram', type: 'state' },
  { id: 'nagaland', name: 'Nagaland', type: 'state' },
  { id: 'odisha', name: 'Odisha', type: 'state' },
  { id: 'punjab', name: 'Punjab', type: 'state' },
  { id: 'rajasthan', name: 'Rajasthan', type: 'state' },
  { id: 'sikkim', name: 'Sikkim', type: 'state' },
  { id: 'tamil-nadu', name: 'Tamil Nadu', type: 'state' },
  { id: 'telangana', name: 'Telangana', type: 'state' },
  { id: 'tripura', name: 'Tripura', type: 'state' },
  { id: 'uttar-pradesh', name: 'Uttar Pradesh', type: 'state' },
  { id: 'uttarakhand', name: 'Uttarakhand', type: 'state' },
  { id: 'west-bengal', name: 'West Bengal', type: 'state' },
  
  // Union Territories
  { id: 'andaman-nicobar', name: 'Andaman and Nicobar Islands', type: 'ut' },
  { id: 'chandigarh', name: 'Chandigarh', type: 'ut' },
  { id: 'dadra-nagar-haveli', name: 'Dadra and Nagar Haveli and Daman and Diu', type: 'ut' },
  { id: 'delhi', name: 'Delhi', type: 'ut' },
  { id: 'jammu-kashmir', name: 'Jammu and Kashmir', type: 'ut' },
  { id: 'ladakh', name: 'Ladakh', type: 'ut' },
  { id: 'lakshadweep', name: 'Lakshadweep', type: 'ut' },
  { id: 'puducherry', name: 'Puducherry', type: 'ut' },
];

export const departments = [
  { 
    id: 'transport', 
    name: 'Transport Department', 
    icon: '🚌',
    description: 'Road transport, vehicle registration, and traffic management'
  },
  { 
    id: 'health', 
    name: 'Health Department', 
    icon: '🏥',
    description: 'Public healthcare, medical services, and health infrastructure'
  },
  { 
    id: 'education', 
    name: 'Education Department', 
    icon: '🎓',
    description: 'Schools, colleges, educational programs, and literacy initiatives'
  },
  { 
    id: 'rural-development', 
    name: 'Rural Development', 
    icon: '🌾',
    description: 'Village development, agriculture support, and rural infrastructure'
  },
  { 
    id: 'police', 
    name: 'Police Department', 
    icon: '👮',
    description: 'Law enforcement, public safety, and crime prevention'
  },
  { 
    id: 'public-works', 
    name: 'Public Works Department', 
    icon: '🏗️',
    description: 'Infrastructure development, roads, and public buildings'
  },
];

// Sample funding data
export const sampleFundings = [
  {
    id: 'TXN001',
    transactionId: '0x1a2b3c4d5e6f789...',
    receiverId: 'HEALTH_KERALA_001',
    amount: '₹50,00,000',
    purpose: 'Medical Equipment Purchase',
    date: '2024-01-15',
    status: 'completed',
    department: 'health',
    state: 'kerala'
  },
  {
    id: 'TXN002', 
    transactionId: '0x9f8e7d6c5b4a321...',
    receiverId: 'TRANSPORT_MH_002',
    amount: '₹1,25,00,000',
    purpose: 'Bus Fleet Modernization',
    date: '2024-01-20',
    status: 'completed',
    department: 'transport',
    state: 'maharashtra'
  },
  {
    id: 'TXN003',
    transactionId: '0x456789abcdef123...',
    receiverId: 'EDU_KARNATAKA_003',
    amount: '₹75,00,000',
    purpose: 'Digital Classroom Setup',
    date: '2024-01-25',
    status: 'pending',
    department: 'education',
    state: 'karnataka'
  },
];