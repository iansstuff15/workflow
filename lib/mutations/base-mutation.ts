import {
  deleteProps,
  insertProps,
  readAllProps,
  updateProps,
} from '@/lib/data/interface/app-service/app-service'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

import { cookies } from 'next/headers'
import { supabase } from '@/lib/utilities/providers/backend/supabase'

export class BaseMutation {
  cookieStore = cookies()
  supabase = createRouteHandlerClient({ cookies: () => this.cookieStore })
  database: string = ''
  constructor(database: string) {
    this.database = database
  }
  readAll = async ({}: readAllProps) => {
    return await this.supabase.from(this.database).select('*')
  }
  subscribe = ({}: readAllProps) => {
    return this.supabase
      .channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: this.database },
        payload => {
          console.log('Change received!', payload)
        },
      )
      .subscribe()
  }
  insert = async ({ data, database }: insertProps) => {
    return await database.from(this.database).insert(data).select()
  }

  update = async ({ data, searchKey, searchValue }: updateProps) => {
    return await this.supabase
      .from(this.database)
      .update(data)
      .eq(searchKey, searchValue)
      .select()
  }

  deleteData = async ({ searchKey, searchValue }: deleteProps) => {
    return await this.supabase
      .from(this.database)
      .delete()
      .eq(searchKey, searchValue)
  }
}
