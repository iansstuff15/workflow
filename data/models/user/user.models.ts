export interface User {
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
