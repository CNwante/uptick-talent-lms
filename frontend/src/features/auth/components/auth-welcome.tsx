import Box from '@/components/ui/box';
import { Users } from '@/types/auth';
import { useSearchParams } from 'next/navigation';

const Welcome = () => {
  const searchParams = useSearchParams();
  const role = (searchParams.get('role') as Users) || 'student';

  const subtitle: Record<typeof role, string> = {
    student:
      'Access your courses, submit assignments, track your progress, and stay on top of your learning goals all in one place.',
    mentor: 'Manage admissions, guide students, track attendance, and provide feedback seamlessly.',
  };

  return (
    <Box className="w-full max-w-md max-auto mb-8">
      <Box as="h1" className="text-4xl md:5xl font-semibold leading-tight text-white text-center">
        Welcome!
      </Box>

      <Box
        as="p"
        className="mt-4 text-sm md:text-base text-gray-300 text-center max-w-[36rem] mx-auto"
      >
        {subtitle[role]}
      </Box>
    </Box>
  );
};

export { Welcome };
