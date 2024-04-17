/**
 * Conditionally applies classNames based on the provided arguments.
 *
 * @param {...(string|string[])} args - classNames or arrays of classNames to be conditionally applied.
 * @returns {string} - A string containing concatenated classNames with spaces between them.
 * @example
 * // Using ternary operator
 * const isActive = true;
 * const buttonClassNames = cx(
 *   "button",
 *   isActive ? "active" : "disabled",
 * );
 * console.log(buttonClassNames); // Output: "button active"
 *
 * // Using && operator
 * const isLoggedIn = true;
 * const isAdmin = false;
 * const userClassNames = cx(
 *   "user",
 *   isLoggedIn && "logged-in",
 *   isAdmin && "admin"
 * );
 * console.log(userClassNames); // Output: "user logged-in"
 */

export function cx(...args) {
  return args
    .flat() // Flatten the array in case nested arrays are provided
    .filter((x) => typeof x === "string") // Filter out non-string elements
    .join(" ") // Concatenate classNames with spaces between them
    .trim(); // Remove leading and trailing spaces
}
