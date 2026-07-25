import { z } from 'zod';

// ============================================================================
// USER VALIDATION SCHEMAS
// ============================================================================

export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const createCompanySchema = z.object({
  name: z.string().min(2, 'Company name is required'),
  businessCategory: z.string().min(1, 'Business category is required'),
  country: z.string().min(1, 'Country is required'),
  region: z.string().min(1, 'Region is required'),
  currency: z.string().default('USD'),
  language: z.string().default('en'),
});

export const createBranchSchema = z.object({
  name: z.string().min(2, 'Branch name is required'),
  code: z.string().min(1, 'Branch code is required'),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
});

export const createAgencySchema = z.object({
  name: z.string().min(2, 'Agency name is required'),
  code: z.string().min(1, 'Agency code is required'),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().optional(),
  region: z.string().optional(),
});

export const createDepartmentSchema = z.object({
  name: z.string().min(2, 'Department name is required'),
  description: z.string().optional(),
  branchId: z.string().optional(),
  agencyId: z.string().optional(),
});

export const createEmployeeSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  position: z.string().optional(),
  branchId: z.string().optional(),
  agencyId: z.string().optional(),
  departmentId: z.string().optional(),
});

export const createTaskSchema = z.object({
  title: z.string().min(1, 'Task title is required'),
  description: z.string().optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).default('MEDIUM'),
  dueDate: z.string().datetime().optional(),
  assignedToId: z.string().optional(),
  companyId: z.string().optional(),
  branchId: z.string().optional(),
  agencyId: z.string().optional(),
});

export const createAnnouncementSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Content is required'),
  priority: z.enum(['LOW', 'NORMAL', 'HIGH', 'URGENT']).default('NORMAL'),
  expiryDate: z.string().datetime().optional(),
  targetCompanyId: z.string().optional(),
  targetBranchId: z.string().optional(),
  targetAgencyId: z.string().optional(),
});

export const createRoleSchema = z.object({
  name: z.string().min(1, 'Role name is required'),
  description: z.string().optional(),
  permissionIds: z.array(z.string()).optional(),
});

// ============================================================================
// API RESPONSE SCHEMAS
// ============================================================================

export const successResponseSchema = z.object({
  success: z.literal(true),
  data: z.unknown(),
});

export const errorResponseSchema = z.object({
  success: z.literal(false),
  error: z.object({
    code: z.string(),
    message: z.string(),
  }),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type CreateCompanyInput = z.infer<typeof createCompanySchema>;
export type CreateBranchInput = z.infer<typeof createBranchSchema>;
export type CreateAgencyInput = z.infer<typeof createAgencySchema>;
export type CreateDepartmentInput = z.infer<typeof createDepartmentSchema>;
export type CreateEmployeeInput = z.infer<typeof createEmployeeSchema>;
export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type CreateAnnouncementInput = z.infer<typeof createAnnouncementSchema>;
export type CreateRoleInput = z.infer<typeof createRoleSchema>;
