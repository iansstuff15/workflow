import type { Config } from 'drizzle-kit'
export default {
  schema: './lib/schema/schema.ts',
  out: './lib/migration',
} satisfies Config
