export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      dishes: {
        Row: {
          id: string
          name: string
          price: number
          image: string
          description: string
          available: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          name: string
          price: number
          image: string
          description: string
          available?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          price?: number
          image?: string
          description?: string
          available?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string
          dish_id: string
          quantity: number
          building: string
          room_number: string
          payment_method: 'cash' | 'wave' | 'om'
          status: 'pending' | 'confirmed' | 'preparing' | 'delivering' | 'delivered' | 'cancelled'
          total_amount: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          dish_id: string
          quantity: number
          building: string
          room_number: string
          payment_method: 'cash' | 'wave' | 'om'
          status?: 'pending' | 'confirmed' | 'preparing' | 'delivering' | 'delivered' | 'cancelled'
          total_amount: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          dish_id?: string
          quantity?: number
          building?: string
          room_number?: string
          payment_method?: 'cash' | 'wave' | 'om'
          status?: 'pending' | 'confirmed' | 'preparing' | 'delivering' | 'delivered' | 'cancelled'
          total_amount?: number
          created_at?: string
          updated_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          building: string | null
          room_number: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          building?: string | null
          room_number?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          building?: string | null
          room_number?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}