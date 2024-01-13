CREATE TABLE IF NOT EXISTS "leave_request" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	"applied_by" uuid NOT NULL,
	"reviewed_by" uuid NOT NULL,
	"reason" text NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"attachment" text NOT NULL,
	"start_date" date NOT NULL,
	"end_date" date NOT NULL,
	"type" text NOT NULL,
	"is_half_day" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "asset_allocation" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	"acquired_date" timestamp with time zone DEFAULT now(),
	"serial_number" uuid NOT NULL,
	"assigned_to" uuid NOT NULL,
	"assigned_by" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "campaign" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	"title" text NOT NULL,
	"description" text NOT NULL,
	"event_date" timestamp with time zone,
	"link" text,
	"image" text,
	"location" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "certificate_of_attendance_request" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	"applied_by" uuid NOT NULL,
	"reviewed_by" uuid NOT NULL,
	"reason" text NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"attachment" text NOT NULL,
	"start_date" date NOT NULL,
	"end_date" date NOT NULL,
	"time" timestamp with time zone DEFAULT now(),
	"type" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "employee" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"company" text DEFAULT 'workflow',
	"position" text NOT NULL,
	"sick_leave_credits" integer DEFAULT 15,
	"vacation_leave_credits" integer DEFAULT 15,
	"maternal_leave" boolean DEFAULT false,
	"paternal_leave" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "incident_reports" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	"employee" uuid NOT NULL,
	"reviewer" uuid NOT NULL,
	"reported_date" timestamp with time zone DEFAULT now(),
	"status" text DEFAULT 'pending' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "inventory" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	"serial_number" uuid DEFAULT gen_random_uuid() NOT NULL,
	"brand" text NOT NULL,
	"model" text NOT NULL,
	"type" text NOT NULL,
	CONSTRAINT "inventory_serial_number_unique" UNIQUE("serial_number")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "official_business_request" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	"applied_by" uuid NOT NULL,
	"reviewed_by" uuid NOT NULL,
	"reason" text NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"attachment" text NOT NULL,
	"start_date" date NOT NULL,
	"end_date" date NOT NULL,
	"type" text NOT NULL,
	"start_time" time NOT NULL,
	"end_time" time NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "payroll" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	"payroll_date" timestamp with time zone DEFAULT now(),
	"gross_amount" real NOT NULL,
	"net_amount" real NOT NULL,
	"deductions" real DEFAULT 0,
	"deductions_breakdown" json,
	"employee" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "schedule_adjustment_request" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	"type" text NOT NULL,
	"applied_by" uuid NOT NULL,
	"reviewed_by" uuid NOT NULL,
	"current_start_time" time NOT NULL,
	"current_end_time" time NOT NULL,
	"adjusted_start_time" time NOT NULL,
	"adjusted_end_time" time NOT NULL,
	"reason" text NOT NULL,
	"attachment" text,
	"status" text DEFAULT 'pending'
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "system_announcement" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	"announcement" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "time_logs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	"employee" uuid NOT NULL,
	"logtype" text NOT NULL,
	"location" text NOT NULL,
	"date_time" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "undertime_request" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	"applied_by" uuid NOT NULL,
	"reviewed_by" uuid NOT NULL,
	"reason" text NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"attachment" text NOT NULL,
	"start_date" date NOT NULL,
	"end_date" date NOT NULL,
	"type" text NOT NULL,
	"start_time" time NOT NULL,
	"end_time" time NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "leave_request" ADD CONSTRAINT "leave_request_applied_by_employee_id_fk" FOREIGN KEY ("applied_by") REFERENCES "employee"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "leave_request" ADD CONSTRAINT "leave_request_reviewed_by_employee_id_fk" FOREIGN KEY ("reviewed_by") REFERENCES "employee"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "asset_allocation" ADD CONSTRAINT "asset_allocation_serial_number_inventory_serial_number_fk" FOREIGN KEY ("serial_number") REFERENCES "inventory"("serial_number") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "asset_allocation" ADD CONSTRAINT "asset_allocation_assigned_to_employee_id_fk" FOREIGN KEY ("assigned_to") REFERENCES "employee"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "asset_allocation" ADD CONSTRAINT "asset_allocation_assigned_by_employee_id_fk" FOREIGN KEY ("assigned_by") REFERENCES "employee"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "certificate_of_attendance_request" ADD CONSTRAINT "certificate_of_attendance_request_applied_by_employee_id_fk" FOREIGN KEY ("applied_by") REFERENCES "employee"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "certificate_of_attendance_request" ADD CONSTRAINT "certificate_of_attendance_request_reviewed_by_employee_id_fk" FOREIGN KEY ("reviewed_by") REFERENCES "employee"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "incident_reports" ADD CONSTRAINT "incident_reports_employee_employee_id_fk" FOREIGN KEY ("employee") REFERENCES "employee"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "incident_reports" ADD CONSTRAINT "incident_reports_reviewer_employee_id_fk" FOREIGN KEY ("reviewer") REFERENCES "employee"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "official_business_request" ADD CONSTRAINT "official_business_request_applied_by_employee_id_fk" FOREIGN KEY ("applied_by") REFERENCES "employee"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "official_business_request" ADD CONSTRAINT "official_business_request_reviewed_by_employee_id_fk" FOREIGN KEY ("reviewed_by") REFERENCES "employee"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "payroll" ADD CONSTRAINT "payroll_employee_employee_id_fk" FOREIGN KEY ("employee") REFERENCES "employee"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "schedule_adjustment_request" ADD CONSTRAINT "schedule_adjustment_request_applied_by_employee_id_fk" FOREIGN KEY ("applied_by") REFERENCES "employee"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "schedule_adjustment_request" ADD CONSTRAINT "schedule_adjustment_request_reviewed_by_employee_id_fk" FOREIGN KEY ("reviewed_by") REFERENCES "employee"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "time_logs" ADD CONSTRAINT "time_logs_employee_employee_id_fk" FOREIGN KEY ("employee") REFERENCES "employee"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "undertime_request" ADD CONSTRAINT "undertime_request_applied_by_employee_id_fk" FOREIGN KEY ("applied_by") REFERENCES "employee"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "undertime_request" ADD CONSTRAINT "undertime_request_reviewed_by_employee_id_fk" FOREIGN KEY ("reviewed_by") REFERENCES "employee"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
