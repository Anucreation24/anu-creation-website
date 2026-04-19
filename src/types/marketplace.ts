export interface MarketplaceService {
  title: string;
  description?: string;
  category?: string;
}

export interface MarketplaceProduct {
  title: string;
  description?: string;
  category?: string;
  imageUrl?: string;
  price?: string;
}

export interface MarketplaceContact {
  whatsapp?: string;
  email?: string;
  phone?: string;
  websiteUrl?: string;
}

export interface MarketplaceContactLink {
  platform: string;
  url: string;
  label?: string;
}

export interface MarketplaceListing {
  _id: string;
  businessName: string;
  slug: string;
  category: string;
  logoUrl?: string;
  coverImageUrl?: string;
  shortDescription?: string;
  fullDescription?: string;
  location?: string;
  contact?: MarketplaceContact;
  contactLinks?: MarketplaceContactLink[];
  services?: MarketplaceService[];
  products?: MarketplaceProduct[];
  featured?: boolean;
  isVisible?: boolean;
}
