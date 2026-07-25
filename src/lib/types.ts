import { User, UserStatus, Role, Permission, Employee } from '@prisma/client';

// ============================================================================
// USER & AUTH TYPES
// ============================================================================

export interface AuthUser extends Omit<User, 'password'> {
  role: Role;
}

export interface AuthContext {
  user: AuthUser;
  tenantId: string;
}

export interface SessionData {
  userId: string;
  tenantId: string;
  email: string;
  role: string;
  expiresAt: number;
}

// ============================================================================
// API RESPONSE TYPES
// ============================================================================

export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
}

export interface ApiErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
  };
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

// ============================================================================
// PERMISSION TYPES
// ============================================================================

export interface PermissionCheckInput {
  userId: string;
  tenantId: string;
  permission: string;
}

export interface PermissionCheckResult {
  hasPermission: boolean;
  reason?: string;
}

// ============================================================================
// PAGINATION TYPES
// ============================================================================

export interface PaginationInput {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

// ============================================================================
// ERROR TYPES
// ============================================================================

export class AppError extends Error {
  constructor(
    public code: string,
    message: string,
    public status: number = 400,
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super('VALIDATION_ERROR', message, 400);
  }
}

export class AuthenticationError extends AppError {
  constructor(message: string = 'Authentication required') {
    super('AUTHENTICATION_ERROR', message, 401);
  }
}

export class AuthorizationError extends AppError {
  constructor(message: string = 'You do not have permission to perform this action') {
    super('AUTHORIZATION_ERROR', message, 403);
  }
}

export class NotFoundError extends AppError {
  constructor(entity: string = 'Resource') {
    super('NOT_FOUND', `${entity} not found`, 404);
  }
}

export class ConflictError extends AppError {
  constructor(message: string) {
    super('CONFLICT', message, 409);
  }
}

// ============================================================================
// SYSTEM ROLES
// ============================================================================

export enum SystemRole {
  PLATFORM_ADMIN = 'PLATFORM_ADMIN',
  TENANT_OWNER = 'TENANT_OWNER',
  COMPANY_ADMIN = 'COMPANY_ADMIN',
  BRANCH_MANAGER = 'BRANCH_MANAGER',
  EMPLOYEE = 'EMPLOYEE',
}

// ============================================================================
// SYSTEM PERMISSIONS
// ============================================================================

export enum SystemPermission {
  // Company permissions
  COMPANY_VIEW = 'company.view',
  COMPANY_CREATE = 'company.create',
  COMPANY_UPDATE = 'company.update',
  COMPANY_DELETE = 'company.delete',

  // Branch permissions
  BRANCH_VIEW = 'branch.view',
  BRANCH_CREATE = 'branch.create',
  BRANCH_UPDATE = 'branch.update',
  BRANCH_DELETE = 'branch.delete',

  // Agency permissions
  AGENCY_VIEW = 'agency.view',
  AGENCY_CREATE = 'agency.create',
  AGENCY_UPDATE = 'agency.update',
  AGENCY_DELETE = 'agency.delete',

  // Employee permissions
  EMPLOYEE_VIEW = 'employee.view',
  EMPLOYEE_CREATE = 'employee.create',
  EMPLOYEE_UPDATE = 'employee.update',
  EMPLOYEE_DELETE = 'employee.delete',

  // Task permissions
  TASK_VIEW = 'task.view',
  TASK_CREATE = 'task.create',
  TASK_UPDATE = 'task.update',
  TASK_DELETE = 'task.delete',
  TASK_ASSIGN = 'task.assign',

  // Settings permissions
  SETTINGS_VIEW = 'settings.view',
  SETTINGS_UPDATE = 'settings.update',

  // Billing permissions
  BILLING_VIEW = 'billing.view',
  BILLING_UPDATE = 'billing.update',

  // Audit permissions
  AUDIT_VIEW = 'audit.view',
}
