import { AppError, ValidationError, AuthenticationError, AuthorizationError, NotFoundError, ConflictError } from './types';
import { ApiResponse } from './types';

// ============================================================================
// ERROR HANDLING
// ============================================================================

export function handleError(error: unknown): AppError {
  if (error instanceof AppError) {
    return error;
  }

  if (error instanceof Error) {
    return new AppError('INTERNAL_ERROR', error.message, 500);
  }

  return new AppError('UNKNOWN_ERROR', 'An unknown error occurred', 500);
}

export function formatErrorResponse(error: unknown): ApiResponse<null> {
  const appError = handleError(error);
  return {
    success: false,
    error: {
      code: appError.code,
      message: appError.message,
    },
  };
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Generate a unique slug from a string
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Generate a random code (e.g., for branch/agency codes)
 */
export function generateCode(prefix: string = ''): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return prefix ? `${prefix}${code}` : code;
}

/**
 * Format phone number
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+1 (${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
}

/**
 * Check if email is valid format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Get initials from a name
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Format currency
 */
export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Format date
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
}

/**
 * Format date time
 */
export function formatDateTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(dateObj);
}

/**
 * Calculate days until date
 */
export function daysUntil(date: Date | string): number {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  dateObj.setHours(0, 0, 0, 0);
  const timeDiff = dateObj.getTime() - today.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

/**
 * Deep clone an object
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T;
  if (obj instanceof Array) return obj.map((item) => deepClone(item)) as unknown as T;
  if (obj instanceof Object) {
    const clonedObj = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
  return obj;
}

/**
 * Merge objects deeply
 */
export function deepMerge<T extends object>(target: T, source: Partial<T>): T {
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key as keyof T])) {
        if (!(key in output)) {
          (output as any)[key] = source[key as keyof T];
        } else {
          (output as any)[key] = deepMerge(target[key as keyof T] as any, source[key as keyof T] as any);
        }
      } else {
        (output as any)[key] = source[key as keyof T];
      }
    });
  }
  return output;
}

function isObject(item: any): item is object {
  return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Truncate string
 */
export function truncate(str: string, length: number = 50, suffix: string = '...'): string {
  if (str.length <= length) return str;
  return str.slice(0, length - suffix.length) + suffix;
}

/**
 * Capitalize first letter
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Convert camelCase to Title Case
 */
export function camelCaseToTitleCase(str: string): string {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}

/**
 * Sleep/delay function
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Retry logic
 */
export async function retry<T>(
  fn: () => Promise<T>,
  options: { maxAttempts?: number; delayMs?: number } = {},
): Promise<T> {
  const { maxAttempts = 3, delayMs = 1000 } = options;

  for (let i = 0; i < maxAttempts; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxAttempts - 1) throw error;
      await sleep(delayMs * (i + 1));
    }
  }

  throw new Error('Retry failed');
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(fn: T, delayMs: number = 300) {
  let timeoutId: NodeJS.Timeout | null = null;

  return ((...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delayMs);
  }) as T;
}

/**
 * Throttle function
 */
export function throttle<T extends (...args: any[]) => any>(fn: T, delayMs: number = 300) {
  let lastCallTime = 0;

  return ((...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCallTime >= delayMs) {
      fn(...args);
      lastCallTime = now;
    }
  }) as T;
}
