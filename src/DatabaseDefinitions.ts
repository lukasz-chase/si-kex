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
      equipment: {
        Row: {
          category: string | null
          description: string | null
          id: number
          images: Json[] | null
          name: string | null
          price: number | null
        }
        Insert: {
          category?: string | null
          description?: string | null
          id?: number
          images?: Json[] | null
          name?: string | null
          price?: number | null
        }
        Update: {
          category?: string | null
          description?: string | null
          id?: number
          images?: Json[] | null
          name?: string | null
          price?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
