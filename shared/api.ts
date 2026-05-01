/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Contact form submission interface
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Response type for contact form submission
 */
export interface ContactFormResponse {
  success: boolean;
  message: string;
  id?: string;
}
