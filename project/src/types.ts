export interface Dish {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface Order {
  dish: Dish;
  quantity: number;
  building: string;
  roomNumber: string;
  paymentMethod: 'cash' | 'wave' | 'om';
}

export type PaymentMethod = 'cash' | 'wave' | 'om';