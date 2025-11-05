import React from 'react';
import { FormInput } from './FormInput';
import Box from '@/components/ui/box';

export const PersonalInfo = () => {
  return (
    <Box>
      <FormInput name="firstName" label="First Name" placeholder="Jane" />
      <FormInput name="lastName" label="Last Name" placeholder="Doe" />
      <FormInput
        name="email"
        label="Email Address"
        type="email"
        placeholder="jane.doe@example.com"
      />
      <FormInput
        name="phoneNumber"
        label="Phone Number"
        type="tel"
        placeholder="+1 234 567 890"
      />
      <FormInput name="city" label="City" placeholder="New York" />
    </Box>
  );
};