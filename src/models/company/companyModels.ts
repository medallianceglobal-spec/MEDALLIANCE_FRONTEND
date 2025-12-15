export interface CompanyListParams {
  page?: number;
  limit?: number;
  city?: string;
  state?: string;
  categoryId?: string;
  search?: string;
}

export interface CompanyListResponse {
  success: boolean;
  page: number;
  limit: number;
  total: number;
  companies: CompanyResponse[];
}

export interface CompanyResponse {
  id: string;

  // Basic info
  name: string;
  tagline?: string | null;
  description: string;
  longDescription?: string | null;

  // Location
  city: string;
  state: string;
  country: string;
  location?: string | null;
  fullAddress?: string | null;

  // Contact
  phone?: string | null;
  email?: string | null;
  website?: string | null;
  workingHours?: string | null;

  // Stats
  rating: number;
  totalReviews: number;

  // Flags
  isPremium: boolean;
  isAccredited: boolean;
  isFeatured: boolean;

  // Category
  category?: {
    id: string;
    name: string;
  } | null;

  // Images
  images?: {
    id: string;
    imageUrl: string;
  }[];

  // Specializations - FIXED nested structure
  specializations?: {
    specialization: {
      id: string;
      name: string;
    };
  }[];

  // Sub Categories - FIXED nested structure
  subCategories?: {
    subCategory: {
      id: string;
      name: string;
    };
  }[];

  // Accreditations - FIXED nested structure
  accreditations?: {
    id: string;
    name: string;
  }[];

  // Reviews
  reviews?: {
    id: string;
    rating: number;
    comment: string;
    authorName: string;
    createdAt: string;
  }[];

  // Timestamps
  createdAt: string;
  updatedAt: string;
}
