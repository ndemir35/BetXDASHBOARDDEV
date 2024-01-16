/**
 * Checks if the input value is a valid email address.
 * @param {string} value - The input value to be checked.
 * @returns {boolean} - Returns true if the input value is a valid email address, else returns false.
 */
export function isEmail(value: string): boolean {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return emailRegex.test(value);
}
