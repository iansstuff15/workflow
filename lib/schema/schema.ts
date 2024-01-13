import {
  serial,
  text,
  timestamp,
  pgTable,
  uuid,
  integer,
  boolean,
  PgTimestampConfig,
  date,
  time,
  real,
  json,
} from 'drizzle-orm/pg-core'
import { relations, sql } from 'drizzle-orm'
import { selectProps } from '../data/interface/select/select.interface'

const timestampConfig: PgTimestampConfig = {
  withTimezone: true,
  mode: 'string',
}
const cascadeOnDeleteOfParent = { onDelete: 'cascade' }

const baseColumns = {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  createdAt: timestamp('created_at', timestampConfig).default(sql`now()`),
  updatedAt: timestamp('updated_at', timestampConfig).default(sql`now()`),
}

export const employee = pgTable('employee', {
  ...baseColumns,
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  company: text('company').default('workflow'),
  position: text('position').notNull(),
  sickLeaveCredits: integer('sick_leave_credits').default(15),
  vacationLeaveCredits: integer('vacation_leave_credits').default(15),
  maternalLeave: boolean('maternal_leave').default(false),
  paternalLeave: boolean('paternal_leave').default(false),
})

const requestBaseColumns = {
  appliedBy: uuid('applied_by')
    .references(() => employee.id)
    .notNull(),
  reviewedBy: uuid('reviewed_by')
    .references(() => employee.id)
    .notNull(),
  reason: text('reason').notNull(),
  status: text('status').notNull().default('pending'),
  attachment: text('attachment').notNull(),
  startDate: date('start_date').notNull(),
  endDate: date('end_date').notNull(),
}

export const campaign = pgTable('campaign', {
  ...baseColumns,
  title: text('title').notNull(),
  description: text('description').notNull(),
  eventDate: timestamp('event_date', timestampConfig),
  link: text('link'),
  image: text('image'),
  location: text('location'),
})

export const assetAllocation = pgTable('asset_allocation', {
  ...baseColumns,
  acquiredDate: timestamp('acquired_date', timestampConfig).default(sql`now()`),
  serialNumber: uuid('serial_number')
    .references(() => inventory.serialNumber)
    .notNull(),
  assignedTo: uuid('assigned_to')
    .references(() => employee.id)
    .notNull(),
  assignedBy: uuid('assigned_by')
    .references(() => employee.id)
    .notNull(),
})

export const inventory = pgTable('inventory', {
  ...baseColumns,
  serialNumber: uuid('serial_number').notNull().unique().defaultRandom(),
  brand: text('brand').notNull(),
  model: text('model').notNull(),
  type: text('type').notNull(),
})

export const incidentReports = pgTable('incident_reports', {
  ...baseColumns,
  employee: uuid('employee')
    .references(() => employee.id)
    .notNull(),
  reviewer: uuid('reviewer')
    .references(() => employee.id)
    .notNull(),
  reportedDate: timestamp('reported_date', timestampConfig).default(sql`now()`),

  status: text('status').notNull().default('pending'),
})

export const certificateOfAttendanceRequest = pgTable(
  'certificate_of_attendance_request',
  {
    ...baseColumns,
    ...requestBaseColumns,
    time: timestamp('time', timestampConfig).default(sql`now()`),
    type: text('type').notNull(),
  },
)

export const LeaveRequest = pgTable('leave_request', {
  ...baseColumns,
  ...requestBaseColumns,
  type: text('type').notNull(),
  isHalfDay: boolean('is_half_day').default(false),
})

export const officialBusinessRequest = pgTable('official_business_request', {
  ...baseColumns,
  ...requestBaseColumns,
  type: text('type').notNull(),
  startTime: time('start_time').notNull(),
  endTime: time('end_time').notNull(),
})

export const scheduleAdjustmentRequest = pgTable(
  'schedule_adjustment_request',
  {
    ...baseColumns,

    type: text('type').notNull(),
    appliedBy: uuid('applied_by')
      .references(() => employee.id)
      .notNull(),
    reviewedBy: uuid('reviewed_by')
      .references(() => employee.id)
      .notNull(),
    currentStartTime: time('current_start_time').notNull(),
    currentEndTime: time('current_end_time').notNull(),
    adjustedStartTime: time('adjusted_start_time').notNull(),
    adjustedEndTime: time('adjusted_end_time').notNull(),
    reason: text('reason').notNull(),
    attachment: text('attachment'),
    status: text('status').default('pending'),
  },
)

export const undertimeRequest = pgTable('undertime_request', {
  ...baseColumns,
  ...requestBaseColumns,
  type: text('type').notNull(),
  startTime: time('start_time').notNull(),
  endTime: time('end_time').notNull(),
})

export const payroll = pgTable('payroll', {
  ...baseColumns,
  payrollDate: timestamp('payroll_date', timestampConfig).default(sql`now()`),
  grossAmount: real('gross_amount').notNull(),
  netAmount: real('net_amount').notNull(),
  deductions: real('deductions').default(0),
  deductionsBreakdown: json('deductions_breakdown'),
  employee: uuid('employee')
    .references(() => employee.id)
    .notNull(),
})

export const systemAnnouncement = pgTable('system_announcement', {
  ...baseColumns,
  announcement: text('announcement').notNull(),
})

export const timeLogs = pgTable('time_logs', {
  ...baseColumns,
  employee: uuid('employee')
    .references(() => employee.id)
    .notNull(),
  logtype: text('logtype').notNull(),
  location: text('location').notNull(),
  dateTime: timestamp('date_time', timestampConfig).default(sql`now()`),
})
