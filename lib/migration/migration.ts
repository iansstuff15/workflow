import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import { migrate } from 'drizzle-orm/postgres-js/migrator'

import * as schema from '@/lib/schema/schema'
import { showSuccess } from '../config/message/message.config'

const client = postgres(process.env.NEXT_PUBLIC_DATABASE_URL!, { max: 1 })
const db = drizzle(client, { schema })
export const migrateDB = async () => {
  console.log('🟠 Migrating...')
  try {
    await migrate(db, {
      migrationsFolder: 'lib/migration',
    })

    console.log('🟢 Successful migration')
  } catch (error) {
    console.log('🔴 Error: ' + error)
  }
}
migrateDB()
export default db
