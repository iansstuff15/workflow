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
      assets_allocation: {
        Row: {
          acquired_date: string
          assigned_by: string
          assigned_to: string
          created_at: string
          id: string
          serial_number: string
        }
        Insert: {
          acquired_date?: string
          assigned_by: string
          assigned_to: string
          created_at?: string
          id?: string
          serial_number: string
        }
        Update: {
          acquired_date?: string
          assigned_by?: string
          assigned_to?: string
          created_at?: string
          id?: string
          serial_number?: string
        }
        Relationships: [
          {
            foreignKeyName: "assets_allocation_assigned_by_fkey"
            columns: ["assigned_by"]
            isOneToOne: false
            referencedRelation: "employee"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assets_allocation_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "employee"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assets_allocation_serial_number_fkey"
            columns: ["serial_number"]
            isOneToOne: false
            referencedRelation: "inventory"
            referencedColumns: ["serial_number"]
          }
        ]
      }
      campaign: {
        Row: {
          created_at: string
          description: string
          event_date: string
          id: number
          images: string[]
          link: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          description: string
          event_date: string
          id?: number
          images: string[]
          link?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          description?: string
          event_date?: string
          id?: number
          images?: string[]
          link?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      certificate_of_attendance_request: {
        Row: {
          applied_by: string | null
          attachment: string | null
          created_at: string
          id: number
          reason: string | null
          reviewed_by: string | null
          status: string | null
          time: string | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          applied_by?: string | null
          attachment?: string | null
          created_at?: string
          id?: number
          reason?: string | null
          reviewed_by?: string | null
          status?: string | null
          time?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          applied_by?: string | null
          attachment?: string | null
          created_at?: string
          id?: number
          reason?: string | null
          reviewed_by?: string | null
          status?: string | null
          time?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "certificate_of_attendance_request_applied_by_fkey"
            columns: ["applied_by"]
            isOneToOne: false
            referencedRelation: "employee"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "certificate_of_attendance_request_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "employee"
            referencedColumns: ["id"]
          }
        ]
      }
      employee: {
        Row: {
          company: string
          created_at: string
          email: string
          first_name: string
          id: string
          last_name: string
          maternal_leave: boolean | null
          paternal_leave: boolean | null
          phone: string
          position: string
          sick_leave_credit: number | null
          updated_at: string
          vacation_leave_credit: number | null
        }
        Insert: {
          company: string
          created_at?: string
          email: string
          first_name: string
          id?: string
          last_name: string
          maternal_leave?: boolean | null
          paternal_leave?: boolean | null
          phone: string
          position: string
          sick_leave_credit?: number | null
          updated_at: string
          vacation_leave_credit?: number | null
        }
        Update: {
          company?: string
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          maternal_leave?: boolean | null
          paternal_leave?: boolean | null
          phone?: string
          position?: string
          sick_leave_credit?: number | null
          updated_at?: string
          vacation_leave_credit?: number | null
        }
        Relationships: []
      }
      incident_reports: {
        Row: {
          attachment: string
          created_at: string
          employee: string
          id: string
          reported_date: string
          reviewer: string
          updated_at: string | null
        }
        Insert: {
          attachment: string
          created_at?: string
          employee: string
          id?: string
          reported_date: string
          reviewer: string
          updated_at?: string | null
        }
        Update: {
          attachment?: string
          created_at?: string
          employee?: string
          id?: string
          reported_date?: string
          reviewer?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "incident_reports_employee_fkey"
            columns: ["employee"]
            isOneToOne: false
            referencedRelation: "employee"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "incident_reports_reviewer_fkey"
            columns: ["reviewer"]
            isOneToOne: false
            referencedRelation: "employee"
            referencedColumns: ["id"]
          }
        ]
      }
      inventory: {
        Row: {
          brand: string | null
          created_at: string
          model: string | null
          serial_number: string
          type: string | null
          updated_at: string | null
        }
        Insert: {
          brand?: string | null
          created_at?: string
          model?: string | null
          serial_number?: string
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          brand?: string | null
          created_at?: string
          model?: string | null
          serial_number?: string
          type?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      leave_request: {
        Row: {
          applied_by: string
          attachment: string | null
          created_at: string
          id: string
          is_half_day: boolean | null
          reason: string
          reviewed_by: string
          status: string | null
          type: string
        }
        Insert: {
          applied_by: string
          attachment?: string | null
          created_at?: string
          id?: string
          is_half_day?: boolean | null
          reason: string
          reviewed_by: string
          status?: string | null
          type: string
        }
        Update: {
          applied_by?: string
          attachment?: string | null
          created_at?: string
          id?: string
          is_half_day?: boolean | null
          reason?: string
          reviewed_by?: string
          status?: string | null
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "leave_request_applied_by_fkey"
            columns: ["applied_by"]
            isOneToOne: false
            referencedRelation: "employee"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leave_request_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "employee"
            referencedColumns: ["id"]
          }
        ]
      }
      official_business_request: {
        Row: {
          applied_by: string
          attachment: string | null
          created_at: string
          end_date: string
          end_time: string
          id: string
          reason: string
          reviewed_by: string
          start_date: string
          start_time: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          applied_by: string
          attachment?: string | null
          created_at?: string
          end_date?: string
          end_time?: string
          id?: string
          reason: string
          reviewed_by: string
          start_date?: string
          start_time?: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          applied_by?: string
          attachment?: string | null
          created_at?: string
          end_date?: string
          end_time?: string
          id?: string
          reason?: string
          reviewed_by?: string
          start_date?: string
          start_time?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "official_business_request_applied_by_fkey"
            columns: ["applied_by"]
            isOneToOne: false
            referencedRelation: "employee"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "official_business_request_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "employee"
            referencedColumns: ["id"]
          }
        ]
      }
      payroll: {
        Row: {
          created_at: string
          dedeuctions_info: Json
          deductions: number
          employee: string
          gross_amount: number
          id: number
          net_amount: number
          payroll_date: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          dedeuctions_info: Json
          deductions: number
          employee: string
          gross_amount: number
          id?: number
          net_amount: number
          payroll_date: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          dedeuctions_info?: Json
          deductions?: number
          employee?: string
          gross_amount?: number
          id?: number
          net_amount?: number
          payroll_date?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payroll_employee_fkey"
            columns: ["employee"]
            isOneToOne: false
            referencedRelation: "employee"
            referencedColumns: ["id"]
          }
        ]
      }
      schedule_adjustment_request: {
        Row: {
          adjusted_end_time: string
          adjusted_start_time: string
          applied_by: string
          attachment: string | null
          created_at: string
          current_end_time: string
          current_start_time: string
          id: string
          reason: string
          reviewed_by: string
          status: string
          updated_at: string | null
        }
        Insert: {
          adjusted_end_time: string
          adjusted_start_time: string
          applied_by: string
          attachment?: string | null
          created_at?: string
          current_end_time: string
          current_start_time: string
          id?: string
          reason: string
          reviewed_by: string
          status?: string
          updated_at?: string | null
        }
        Update: {
          adjusted_end_time?: string
          adjusted_start_time?: string
          applied_by?: string
          attachment?: string | null
          created_at?: string
          current_end_time?: string
          current_start_time?: string
          id?: string
          reason?: string
          reviewed_by?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "schedule_adjustment_request_applied_by_fkey"
            columns: ["applied_by"]
            isOneToOne: false
            referencedRelation: "employee"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedule_adjustment_request_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "employee"
            referencedColumns: ["id"]
          }
        ]
      }
      time_logs: {
        Row: {
          created_at: string
          date: string | null
          employee: string
          id: string
          last_updated: string
          location: string
          log_type: string
          time: string | null
        }
        Insert: {
          created_at?: string
          date?: string | null
          employee: string
          id?: string
          last_updated?: string
          location: string
          log_type: string
          time?: string | null
        }
        Update: {
          created_at?: string
          date?: string | null
          employee?: string
          id?: string
          last_updated?: string
          location?: string
          log_type?: string
          time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "time_logs_employee_fkey"
            columns: ["employee"]
            isOneToOne: false
            referencedRelation: "employee"
            referencedColumns: ["id"]
          }
        ]
      }
      undertime_request: {
        Row: {
          applied_by: string
          attachment: string
          created_at: string
          end_time: string
          id: number
          reason: string
          requested_date: string
          reviewed_by: string
          start_time: string
          status: string | null
          updated_at: string
        }
        Insert: {
          applied_by: string
          attachment: string
          created_at?: string
          end_time: string
          id?: number
          reason: string
          requested_date: string
          reviewed_by: string
          start_time: string
          status?: string | null
          updated_at?: string
        }
        Update: {
          applied_by?: string
          attachment?: string
          created_at?: string
          end_time?: string
          id?: number
          reason?: string
          requested_date?: string
          reviewed_by?: string
          start_time?: string
          status?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "undertime_request_applied_by_fkey"
            columns: ["applied_by"]
            isOneToOne: false
            referencedRelation: "employee"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "undertime_request_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "employee"
            referencedColumns: ["id"]
          }
        ]
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

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
