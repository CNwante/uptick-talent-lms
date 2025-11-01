import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as Yup from 'yup';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Please enter a valid email address, eg: you@example.com'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Please enter your password'),
});
