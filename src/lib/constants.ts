export const APP_NAME = 'AURA OS';
export const APP_DESCRIPTION = 'Centralized Business Management System';

// ============================================================================
// SYSTEM ROLES
// ============================================================================

export const SYSTEM_ROLES = {
  PLATFORM_ADMIN: 'PLATFORM_ADMIN',
  TENANT_OWNER: 'TENANT_OWNER',
  COMPANY_ADMIN: 'COMPANY_ADMIN',
  BRANCH_MANAGER: 'BRANCH_MANAGER',
  EMPLOYEE: 'EMPLOYEE',
} as const;

// ============================================================================
// SYSTEM PERMISSIONS
// ============================================================================

export const SYSTEM_PERMISSIONS = {
  // Company
  COMPANY_VIEW: 'company.view',
  COMPANY_CREATE: 'company.create',
  COMPANY_UPDATE: 'company.update',
  COMPANY_DELETE: 'company.delete',

  // Branch
  BRANCH_VIEW: 'branch.view',
  BRANCH_CREATE: 'branch.create',
  BRANCH_UPDATE: 'branch.update',
  BRANCH_DELETE: 'branch.delete',

  // Agency
  AGENCY_VIEW: 'agency.view',
  AGENCY_CREATE: 'agency.create',
  AGENCY_UPDATE: 'agency.update',
  AGENCY_DELETE: 'agency.delete',

  // Department
  DEPARTMENT_VIEW: 'department.view',
  DEPARTMENT_CREATE: 'department.create',
  DEPARTMENT_UPDATE: 'department.update',
  DEPARTMENT_DELETE: 'department.delete',

  // Employee
  EMPLOYEE_VIEW: 'employee.view',
  EMPLOYEE_CREATE: 'employee.create',
  EMPLOYEE_UPDATE: 'employee.update',
  EMPLOYEE_DELETE: 'employee.delete',

  // Task
  TASK_VIEW: 'task.view',
  TASK_CREATE: 'task.create',
  TASK_UPDATE: 'task.update',
  TASK_DELETE: 'task.delete',
  TASK_ASSIGN: 'task.assign',

  // Announcement
  ANNOUNCEMENT_VIEW: 'announcement.view',
  ANNOUNCEMENT_CREATE: 'announcement.create',
  ANNOUNCEMENT_UPDATE: 'announcement.update',
  ANNOUNCEMENT_DELETE: 'announcement.delete',

  // Document
  DOCUMENT_VIEW: 'document.view',
  DOCUMENT_CREATE: 'document.create',
  DOCUMENT_DELETE: 'document.delete',

  // Settings
  SETTINGS_VIEW: 'settings.view',
  SETTINGS_UPDATE: 'settings.update',

  // Billing
  BILLING_VIEW: 'billing.view',
  BILLING_UPDATE: 'billing.update',

  // Audit
  AUDIT_VIEW: 'audit.view',
} as const;

// ============================================================================
// ROLE PERMISSION MAPPINGS
// ============================================================================

export const ROLE_PERMISSIONS = {
  [SYSTEM_ROLES.PLATFORM_ADMIN]: Object.values(SYSTEM_PERMISSIONS),

  [SYSTEM_ROLES.TENANT_OWNER]: Object.values(SYSTEM_PERMISSIONS),

  [SYSTEM_ROLES.COMPANY_ADMIN]: [
    SYSTEM_PERMISSIONS.COMPANY_VIEW,
    SYSTEM_PERMISSIONS.COMPANY_UPDATE,
    SYSTEM_PERMISSIONS.BRANCH_VIEW,
    SYSTEM_PERMISSIONS.BRANCH_CREATE,
    SYSTEM_PERMISSIONS.BRANCH_UPDATE,
    SYSTEM_PERMISSIONS.BRANCH_DELETE,
    SYSTEM_PERMISSIONS.AGENCY_VIEW,
    SYSTEM_PERMISSIONS.AGENCY_CREATE,
    SYSTEM_PERMISSIONS.AGENCY_UPDATE,
    SYSTEM_PERMISSIONS.AGENCY_DELETE,
    SYSTEM_PERMISSIONS.DEPARTMENT_VIEW,
    SYSTEM_PERMISSIONS.DEPARTMENT_CREATE,
    SYSTEM_PERMISSIONS.DEPARTMENT_UPDATE,
    SYSTEM_PERMISSIONS.DEPARTMENT_DELETE,
    SYSTEM_PERMISSIONS.EMPLOYEE_VIEW,
    SYSTEM_PERMISSIONS.EMPLOYEE_CREATE,
    SYSTEM_PERMISSIONS.EMPLOYEE_UPDATE,
    SYSTEM_PERMISSIONS.EMPLOYEE_DELETE,
    SYSTEM_PERMISSIONS.TASK_VIEW,
    SYSTEM_PERMISSIONS.TASK_CREATE,
    SYSTEM_PERMISSIONS.TASK_UPDATE,
    SYSTEM_PERMISSIONS.TASK_DELETE,
    SYSTEM_PERMISSIONS.TASK_ASSIGN,
    SYSTEM_PERMISSIONS.ANNOUNCEMENT_VIEW,
    SYSTEM_PERMISSIONS.ANNOUNCEMENT_CREATE,
    SYSTEM_PERMISSIONS.ANNOUNCEMENT_UPDATE,
    SYSTEM_PERMISSIONS.ANNOUNCEMENT_DELETE,
    SYSTEM_PERMISSIONS.DOCUMENT_VIEW,
    SYSTEM_PERMISSIONS.DOCUMENT_CREATE,
    SYSTEM_PERMISSIONS.DOCUMENT_DELETE,
    SYSTEM_PERMISSIONS.SETTINGS_VIEW,
    SYSTEM_PERMISSIONS.SETTINGS_UPDATE,
  ],

  [SYSTEM_ROLES.BRANCH_MANAGER]: [
    SYSTEM_PERMISSIONS.COMPANY_VIEW,
    SYSTEM_PERMISSIONS.BRANCH_VIEW,
    SYSTEM_PERMISSIONS.BRANCH_UPDATE,
    SYSTEM_PERMISSIONS.DEPARTMENT_VIEW,
    SYSTEM_PERMISSIONS.DEPARTMENT_CREATE,
    SYSTEM_PERMISSIONS.EMPLOYEE_VIEW,
    SYSTEM_PERMISSIONS.EMPLOYEE_CREATE,
    SYSTEM_PERMISSIONS.TASK_VIEW,
    SYSTEM_PERMISSIONS.TASK_CREATE,
    SYSTEM_PERMISSIONS.TASK_UPDATE,
    SYSTEM_PERMISSIONS.TASK_ASSIGN,
    SYSTEM_PERMISSIONS.ANNOUNCEMENT_VIEW,
  ],

  [SYSTEM_ROLES.EMPLOYEE]: [
    SYSTEM_PERMISSIONS.COMPANY_VIEW,
    SYSTEM_PERMISSIONS.TASK_VIEW,
    SYSTEM_PERMISSIONS.ANNOUNCEMENT_VIEW,
    SYSTEM_PERMISSIONS.DOCUMENT_VIEW,
  ],
} as const;

// ============================================================================
// BUSINESS CATEGORIES
// ============================================================================

export const BUSINESS_CATEGORIES = [
  'Technology & IT',
  'Finance & Banking',
  'Healthcare',
  'Retail & E-commerce',
  'Manufacturing',
  'Telecommunications',
  'Transportation & Logistics',
  'Education',
  'Real Estate',
  'Hospitality & Tourism',
  'Media & Entertainment',
  'Energy & Utilities',
  'Consulting',
  'Legal Services',
  'Other',
] as const;

// ============================================================================
// COUNTRIES
// ============================================================================

export const COUNTRIES = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'Germany',
  'France',
  'Japan',
  'China',
  'India',
  'Saudi Arabia',
  'United Arab Emirates',
  'Other',
] as const;

// ============================================================================
// CURRENCIES
// ============================================================================

export const CURRENCIES = [
  'USD',
  'EUR',
  'GBP',
  'JPY',
  'AUD',
  'CAD',
  'CHF',
  'CNY',
  'INR',
  'SAR',
  'AED',
] as const;

// ============================================================================
// LANGUAGES
// ============================================================================

export const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
] as const;

// ============================================================================
// TIMEZONES
// ============================================================================

export const TIMEZONES = [
  'UTC',
  'America/New_York',
  'America/Los_Angeles',
  'Europe/London',
  'Europe/Paris',
  'Europe/Berlin',
  'Asia/Tokyo',
  'Asia/Shanghai',
  'Asia/Hong_Kong',
  'Asia/Dubai',
  'Asia/Kolkata',
  'Australia/Sydney',
] as const;

// ============================================================================
// SESSION & TOKENS
// ============================================================================

export const SESSION_TIMEOUT = 24 * 60 * 60 * 1000; // 24 hours in ms
export const REFRESH_TOKEN_EXPIRY = 7 * 24 * 60 * 60 * 1000; // 7 days in ms
export const JWT_EXPIRY = '24h';
export const JWT_REFRESH_EXPIRY = '7d';

// ============================================================================
// PAGINATION
// ============================================================================

export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;
export const MIN_PAGE_SIZE = 1;

// ============================================================================
// VALIDATION CONSTRAINTS
// ============================================================================

export const VALIDATION_CONSTRAINTS = {
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 255,
  MIN_EMAIL_LENGTH: 5,
  MAX_EMAIL_LENGTH: 255,
  MIN_PASSWORD_LENGTH: 8,
  MAX_PASSWORD_LENGTH: 128,
  MIN_DESCRIPTION_LENGTH: 0,
  MAX_DESCRIPTION_LENGTH: 5000,
} as const;

// ============================================================================
// NAVIGATION ITEMS
// ============================================================================

export const NAVIGATION_ITEMS = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: 'Home',
    requiredPermission: null,
  },
  {
    label: 'Organization',
    href: '#',
    icon: 'Building2',
    submenu: [
      { label: 'Company', href: '/dashboard/company', requiredPermission: 'company.view' },
      { label: 'Branches', href: '/dashboard/branches', requiredPermission: 'branch.view' },
      { label: 'Agencies', href: '/dashboard/agencies', requiredPermission: 'agency.view' },
      { label: 'Departments', href: '/dashboard/departments', requiredPermission: 'department.view' },
    ],
  },
  {
    label: 'People',
    href: '#',
    icon: 'Users',
    submenu: [
      { label: 'Employees', href: '/dashboard/employees', requiredPermission: 'employee.view' },
      { label: 'Roles', href: '/dashboard/roles', requiredPermission: 'settings.view' },
      { label: 'Permissions', href: '/dashboard/permissions', requiredPermission: 'settings.view' },
    ],
  },
  {
    label: 'Operations',
    href: '#',
    icon: 'Briefcase',
    submenu: [
      { label: 'Tasks', href: '/dashboard/tasks', requiredPermission: 'task.view' },
      { label: 'Announcements', href: '/dashboard/announcements', requiredPermission: 'announcement.view' },
      { label: 'Documents', href: '/dashboard/documents', requiredPermission: 'document.view' },
    ],
  },
  {
    label: 'Analytics',
    href: '/dashboard/analytics',
    icon: 'BarChart3',
    requiredPermission: null,
  },
  {
    label: 'Billing',
    href: '/dashboard/billing',
    icon: 'CreditCard',
    requiredPermission: 'billing.view',
  },
  {
    label: 'System',
    href: '#',
    icon: 'Settings',
    submenu: [
      { label: 'Notifications', href: '/dashboard/notifications', requiredPermission: null },
      { label: 'Audit Logs', href: '/dashboard/audit-logs', requiredPermission: 'audit.view' },
      { label: 'Settings', href: '/dashboard/settings', requiredPermission: 'settings.view' },
    ],
  },
] as const;
