import React from 'react';
import { useFormikContext } from 'formik';
import { ApplicationFormData } from '../types';
import { FormCheckboxGroup, FormInput } from './FormInput';
import Box from '@/components/ui/box';

const toolOptions = {
  frontend: ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Tailwind CSS'],
  backend: [
    'Node.js',
    'Python (Django/Flask)',
    'PHP (Laravel)',
    'Java (Spring)',
    'Ruby on Rails',
    'Go',
  ],
  fullstack: [
    'React',
    'Node.js',
    'Next.js',
    'Laravel',
    'Django',
    'MongoDB',
    'PostgreSQL',
  ],
  mobile: ['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)'],
};

export const Tools = () => {
  const { values } = useFormikContext<ApplicationFormData>();

  return (
    <Box>
      {values.track === 'FRONTEND' && (
        <Box>
          <FormCheckboxGroup
            name="frontendTools"
            options={toolOptions.frontend}
          />
          <FormInput name="frontendToolsOther" label="Other (please specify)" />
        </Box>
      )}
      {values.track === 'BACKEND' && (
        <Box>
          <FormCheckboxGroup name="backendTools" options={toolOptions.backend} />
          <FormInput name="backendToolsOther" label="Other (please specify)" />
        </Box>
      )}
      {values.track === 'FULLSTACK_DEVELOPMENT' && (
        <Box>
          <FormCheckboxGroup
            name="fullstackTools"
            options={toolOptions.fullstack}
          />
          <FormInput name="fullstackToolsOther" label="Other (please specify)" />
        </Box>
      )}
      {values.track === 'MOBILE_DEVELOPMENT' && (
        <Box>
          <FormCheckboxGroup name="mobileTools" options={toolOptions.mobile} />
          <FormInput name="mobileToolsOther" label="Other (please specify)" />
        </Box>
      )}
    </Box>
  );
};