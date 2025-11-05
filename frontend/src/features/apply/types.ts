export type ApplicationFormData = {
  // Step 1
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;

  // Step 2
  track:
    | ''
    | 'FRONTEND'
    | 'BACKEND'
    | 'FULLSTACK_DEVELOPMENT'
    | 'MOBILE_DEVELOPMENT';

  // Step 3
  frontendTools: string[];
  frontendToolsOther: string;
  backendTools: string[];
  backendToolsOther: string;
  fullstackTools: string[];
  fullstackToolsOther: string;
  mobileTools: string[];
  mobileToolsOther: string;

  // Step 4
  referralSource: string;
  referralSourceOther: string;

  // Step 5
  confirm: boolean;
};