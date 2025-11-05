import Box from '@/components/ui/box';
import React from 'react';
import { cn } from '@/lib/utils'; 

interface StepIndicatorProps {
  currentStep: number;
  steps: { title: string; description: string }[];
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  steps,
}) => {
  return (
    <Box className="mb-8">
      {/* Step Titles */}
      <Box as="h2" className="text-2xl font-semibold">
        {steps[currentStep - 1].title}
      </Box>
      <Box as="p" className="text-gray-600 mt-1">
        {steps[currentStep - 1].description}
      </Box>

      {/* Progress Bar */}
      <Box className="flex items-center space-x-2 mt-6">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <React.Fragment key={step.title}>
              <Box className="flex flex-col items-center">
                <Box
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm',
                    isCompleted
                      ? 'bg-green-500 text-white'
                      : isActive
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700'
                  )}
                >
                  {isCompleted ? '✓' : stepNumber}
                </Box>
                <Box
                  as="span"
                  className={cn(
                    'text-xs mt-2',
                    isActive ? 'font-bold' : 'text-gray-500'
                  )}
                >
                  {step.title.split(' ')[0]} {/* e.g., "Personal" */}
                </Box>
              </Box>
              {stepNumber < steps.length && (
                <Box
                  className={cn(
                    'flex-1 h-1',
                    isCompleted ? 'bg-green-500' : 'bg-gray-200'
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </Box>
    </Box>
  );
};