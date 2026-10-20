import { z } from 'zod';

// 1. تعريف شروط التحقق باستخدام Zod
export const loginSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required")
    .min(3, "Username must be at least 3 characters"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});

// 2. سحر الـ TypeScript: استخراج الـ Type تلقائياً من الـ Schema
export type LoginFormData = z.infer<typeof loginSchema>;