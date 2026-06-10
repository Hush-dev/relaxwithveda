export interface Service {
  id: string;
  category: string;
  title: string;
  duration: string; // e.g., "60 Mins" or "90 Mins"
  price: number;
  description: string;
  isWellness: boolean;
  isSalon: boolean;
  premiumTag?: string; // e.g., "Organic", "Signature", "Veda Exclusive"
  image?: string;
  isBestSeller: boolean;
}

export interface BookingState {
  fullName: string;
  phoneNumber: string;
  location: 'Chandrapur' | 'Nagpur' | 'Tadoba' | '';
  date: string;
  time: string;
  selectedServices: Service[];
  bookingType: 'service' | 'giftcard';
  notes: string;
  giftCardConfig?: {
    type: 'amount' | 'service';
    val: number | string; // Amount (e.g., 2000) or Service ID
    receiverName: string;
    senderName: string;
    message: string;
  };
}

export interface LocationInfo {
  name: 'Chandrapur' | 'Nagpur' | 'Tadoba';
  subtitle: string;
  isWellnessOnly: boolean;
  description: string;
  address: string;
  timing: string;
  coordinates: string; // Map link or visual coordinate
  image: string; // Aesthetic background image
  phone: string;
}
