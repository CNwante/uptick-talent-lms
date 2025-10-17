import React from 'react';
import Box from '@/components/ui/box';
import Link from 'next/link';

const AuthForm: React.FC = () => {
  return (
    <Box as="form" className="w-full max-w-md" onSubmit={e => e.preventDefault()}>
      <Box as="p" className="mb-4 text-[#808080]">
        Log in to your account
      </Box>
      <Box as="label" htmlFor="email" className="block text-sm text-[#605D64] mb-1">
        Email Address
      </Box>
      <Box
        as="input"
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        required
        className="w-full p-3 rounded-md bg-white text-black mb-4"
        aria-label="Email Address"
      />

      <Box as="label" htmlFor="password" className="block text-sm text-[#605D64] mb-1">
        Password
      </Box>
      <Box
        as="input"
        id="password"
        name="password"
        type="password"
        placeholder="••••••••"
        required
        className="w-full p-3 rounded-md bg-white text-black mb-3"
        aria-label="Password"
      />

      <Box className="flex items-center gap-2">
        <Box as="input" id="remember" type="checkbox" className="h-4 w-4" />
        <Box as="label" htmlFor="remember" className="text-sm text-[#605D64]">
          Remember me
        </Box>
      </Box>

      <Box className="mt-6 flex flex-col gap-3 items-center">
        <Box
          as="button"
          type="submit"
          className="w-full px-4 py-3 rounded-md bg-[#3b82f6] text-white font-medium"
        >
          Log In
        </Box>
        <Box
          as={Link}
          href="/"
          className="text-sm text-gray-400 hover:text-gray-200 transition"
          aria-label="Go to hpmepage"
        >
          Back to homepage
        </Box>
      </Box>
    </Box>
  );
};

export { AuthForm };
