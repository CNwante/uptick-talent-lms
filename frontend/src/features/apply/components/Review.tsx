import React from 'react';
import { useFormikContext, Field, ErrorMessage } from 'formik';
import { ApplicationFormData } from '../types';
import Box from '@/components/ui/box';

// Helper component to display a summary item
const SummaryItem: React.FC<{ label: string; value: React.ReactNode }> = ({
  label,
  value,
}) => (
  <Box className="mb-3 py-3">
    <Box as="dt" className="text-sm font-medium text-gray-500">
      {label}
    </Box>
    <Box as="dd" className="mt-1 text-base font-semibold capitalize">
      {value || 'N/A'}
    </Box>
  </Box>
);

// Helper maps to format values for display
const trackDisplayNames: Record<ApplicationFormData['track'], string> = {
  '': 'N/A',
  FRONTEND: 'Frontend Engineering',
  BACKEND: 'Backend Engineering',
  FULLSTACK_DEVELOPMENT: 'Fullstack Engineering',
  MOBILE_DEVELOPMENT: 'Mobile Engineering',
};

const referralSourceDisplayNames: Record<string, string> = {
  TWITTER: 'Twitter (X)',
  LINKEDIN: 'LinkedIn',
  INSTAGRAM: 'Instagram',
  FACEBOOK: 'Facebook',
  FRIEND: 'From a Friend',
  OTHER: 'Other',
};

export const Review = () => {
  const { values } = useFormikContext<ApplicationFormData>();
  const { track } = values;

  let tools: string[] = [];
  let otherTools: string = '';

  if (track === 'FRONTEND') {
    tools = values.frontendTools;
    otherTools = values.frontendToolsOther;
  } else if (track === 'BACKEND') {
    tools = values.backendTools;
    otherTools = values.backendToolsOther;
  } else if (track === 'FULLSTACK_DEVELOPMENT') {
    tools = values.fullstackTools;
    otherTools = values.fullstackToolsOther;
  } else if (track === 'MOBILE_DEVELOPMENT') {
    tools = values.mobileTools;
    otherTools = values.mobileToolsOther;
  }

  const displayTools = [...tools, otherTools].filter(Boolean).join(', ');

  return (
    <Box>
      <Box as="h3" className="text-xl font-semibold mb-4">
        Please review your application
      </Box>

      {/* Personal Info */}
      <Box as="dl" className="divide-y divide-gray-200 mb-6">
        <SummaryItem
          label="Full Name"
          value={`${values.firstName} ${values.lastName}`}
        />
        <SummaryItem label="Email" value={values.email} />
        <SummaryItem label="Phone" value={values.phoneNumber} />
        <SummaryItem label="City" value={values.city} />
      </Box>

      {/* Track & Tools */}
      <Box as="dl" className="divide-y divide-gray-200 mb-6">
        <SummaryItem
          label="Selected Track"
          value={trackDisplayNames[values.track] || values.track}
        />
        {/* Only show tools if there are any */}
        {displayTools && <SummaryItem label="Tools" value={displayTools} />}
      </Box>

      {/* Referral */}
      <Box as="dl" className="divide-y divide-gray-200 mb-6">
        <SummaryItem
          label="Referral Source"
          value={
            referralSourceDisplayNames[values.referralSource] ||
            values.referralSource
          }
        />
        {values.referralSource === 'OTHER' && (
          <SummaryItem label="Other Source" value={values.referralSourceOther} />
        )}
      </Box>

      {/* Confirmation Checkbox */}
      <Box className="mt-6">
        <label className="flex items-center space-x-2">
          <Field type="checkbox" name="confirm" className="rounded" />
          <span>I confirm that all information provided is correct.</span>
        </label>
        <ErrorMessage
          name="confirm"
          component="div"
          className="text-red-600 text-sm mt-1"
        />
      </Box>
    </Box>
  );
};