import { z } from 'zod';

// تعريف شروط الـ SignUp باستخدام Zod
export const signUpSchema = z.object({
  Full_Name: z
    .string()
    .min(1, "Full Name is required")
    .max(50, "Name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Full Name can only contain letters and spaces"),
    
  username: z
    .string()
    .min(1, "Username is required")
    .max(30, "Username cannot exceed 30 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
    
  email: z
    .string()
    .min(1, "Email is required")
    .email("Email format is invalid"),
    
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain uppercase, lowercase, number, and special character"
    ),
    
  confirmPassword: z
    .string()
    .min(1, "Confirm Password is required"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"], // مكان ظهور خطأ تطابق الباسورد
});

// استخراج الـ Type تلقائياً من الـ Zod Schema
export type SignUpFormData = z.infer<typeof signUpSchema>;