import { NextRequest } from 'next/server'

export type InventoryRequest = NextRequest & {
  data: [
    {
      serial_number: string
      model: string
      brand: string
      type: string
      current_status: 'Available' | 'In Use' | 'For Repair' | 'For Disposal'
      assigned_to?: string
      assigned_by?: string
    },
  ]
}
