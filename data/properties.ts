export interface Property {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  location: string;
  coverImage: string;
  images: string[];
  description: string[];
  features: string[];
  specs: {
    beds: number;
    baths: number;
    sqft: string;
    lotSize: string;
  };
  status: 'Sold' | 'For Sale';
}

export const properties: Property[] = [
  {
    id: 'colonial-villa-galle',
    title: 'The Heritage House',
    subtitle: 'Restored Dutch Colonial Villa',
    price: '$1.2 Million',
    location: 'Galle Fort, Southern Province',
    coverImage: 'https://images.unsplash.com/photo-1510627489930-0c1b0dc58e85?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1510627489930-0c1b0dc58e85?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599809275372-b7f58698963d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=800&auto=format&fit=crop'
    ],
    description: [
      "Nestled within the historic ramparts of the UNESCO World Heritage site of Galle Fort, The Heritage House is a masterclass in colonial restoration. Originally built in 1750, this property has been meticulously renovated to preserve its architectural soul while integrating modern luxury.",
      "The villa centers around a stunning open-air courtyard with a Frangipani tree that is over a century old. High timber ceilings, polished cement floors, and antique archways define the interior aesthetic. The living spaces flow seamlessly into the private garden, offering a serene escape from the bustling streets of the Fort.",
      "Perfect for a boutique hotel investment or a private holiday residence, the property commands high rental yields during the peak tourist season."
    ],
    features: ['Swimming Pool', 'Historic Courtyard', 'Staff Quarters', 'Fully Furnished', 'Rooftop Terrace'],
    specs: {
      beds: 5,
      baths: 6,
      sqft: '4,500',
      lotSize: '25 Perches'
    },
    status: 'Sold'
  },
  {
    id: 'skyline-penthouse-colombo',
    title: 'Azure Heights Penthouse',
    subtitle: 'Ultra-Luxury Vertical Living',
    price: '$850,000',
    location: 'Colombo 03, Western Province',
    coverImage: 'https://images.unsplash.com/photo-1512918760532-3ed4659018b7?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1512918760532-3ed4659018b7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a1c002085d2f?q=80&w=800&auto=format&fit=crop'
    ],
    description: [
      "Experience the pinnacle of Colombo living at Azure Heights. Located on the 45th floor, this penthouse offers 360-degree panoramic views of the Indian Ocean and the rapidly evolving city skyline.",
      "Designed by internationally acclaimed architects, the residence features floor-to-ceiling double-glazed windows, Italian marble flooring, and a smart-home automation system that controls lighting, climate, and security with a single touch. The private infinity pool on the balcony creates an illusion of merging with the ocean horizon.",
      "Residents enjoy exclusive access to the building's private cinema, wine cellar, and a helipad for discreet arrivals."
    ],
    features: ['Ocean View', 'Private Infinity Pool', 'Smart Home', 'Private Elevator', '24/7 Concierge'],
    specs: {
      beds: 3,
      baths: 4,
      sqft: '3,200',
      lotSize: 'N/A'
    },
    status: 'Sold'
  },
  {
    id: 'misty-hills-estate',
    title: 'Misty Hills Tea Estate',
    subtitle: 'Colonial Bungalow & Tea Plantation',
    price: '$2.5 Million',
    location: 'Nuwara Eliya, Central Province',
    coverImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop'
    ],
    description: [
      "A rare opportunity to own a piece of Sri Lanka's colonial history. The Misty Hills Tea Estate spans 50 acres of prime high-grown tea and includes an immaculately preserved 1920s planters' bungalow.",
      "The bungalow retains its original teak floorboards, fireplace, and English cottage-style gardens. Mornings here begin with the sight of mist rolling over the emerald hills and the scent of fresh pine. The estate is fully operational with a functioning tea factory that produces premium export-quality tea.",
      "This property serves as both a lucrative agricultural business and a private sanctuary away from the tropical heat of the lowlands."
    ],
    features: ['50 Acres Land', 'Operational Tea Factory', 'Heritage Bungalow', 'Natural Spring', 'Guest Cottage'],
    specs: {
      beds: 6,
      baths: 5,
      sqft: '6,000 (Bungalow)',
      lotSize: '50 Acres'
    },
    status: 'Sold'
  }
];