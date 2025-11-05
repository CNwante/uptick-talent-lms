import React from 'react';
import { ErrorMessage, Field, FieldProps } from 'formik';
import Box from '@/components/ui/box';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const stackOptions = [
  { value: 'FRONTEND', label: 'Frontend Engineering' },
  { value: 'BACKEND', label: 'Backend Engineering' },
  { value: 'FULLSTACK_DEVELOPMENT', label: 'Fullstack Engineering' },
  { value: 'MOBILE_DEVELOPMENT', label: 'Mobile Engineering' },
];

export const Track = () => {
  return (
    <Box>
      <Box as="p" className="mb-4">
        Which track are you applying for?
      </Box>

      <Field name="track">
        {({ field, form }: FieldProps) => (
          <RadioGroup
            name={field.name}
            value={field.value}
            // Use onValueChange to update Formik's state
            onValueChange={value => {
              form.setFieldValue(field.name, value);
            }}
            className="space-y-3"
          >
            {stackOptions.map(option => (
              // Use Label to make the whole box clickable
              <Label
                key={option.value}
                htmlFor={option.value} // Associates label with the RadioGroupItem
                className={cn(
                  'flex items-center justify-between p-4 border rounded-lg cursor-pointer',
                  field.value === option.value
                    ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-500'
                    : 'border-gray-300'
                )}
              >
                <span className="font-medium">{option.label}</span>
                <RadioGroupItem value={option.value} id={option.value} />
              </Label>
            ))}
          </RadioGroup>
        )}
      </Field>

      <ErrorMessage
        name="track"
        component="div"
        className="text-red-600 text-sm mt-2"
      />
    </Box>
  );
};