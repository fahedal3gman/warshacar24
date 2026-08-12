export type ServiceCategory = 'electrical' | 'mechanical' | 'battery' | 'computer';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  startingPrice?: number;
  estimatedTimeMinutes: number;
  image?: string;
  features: string[];
  commonProblemsSolved: string[];
}

export interface EmergencyRequest {
  id: string;
  userName: string;
  userPhone: string;
  carMake: string;
  carModel: string;
  carYear: string;
  serviceCategory: ServiceCategory;
  city: string;
  neighborhood: string;
  addressDetails: string;
  problemDescription: string;
  urgency: 'high' | 'medium' | 'low';
  createdAt: string;
  status: 'received' | 'assigned' | 'en_route' | 'arrived' | 'completed';
  estimatedArrivalMinutes: number;
}

export interface CoverageCity {
  id: string;
  name: string;
  region: string;
  avgDispatchTime: string;
  activeVans: number;
  neighborhoods: string[];
  isAvailable: boolean;
}

export interface CustomerReview {
  id: string;
  author: string;
  carInfo: string;
  serviceType: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface AiDiagnosisResponse {
  symptomSummary: string;
  possibleCauses: {
    cause: string;
    probability: string;
    explanation: string;
  }[];
  severity: 'high' | 'medium' | 'low';
  safetyWarning: string;
  recommendedService: ServiceCategory;
  estimatedCostRange: string;
  suggestedAction: string;
}
