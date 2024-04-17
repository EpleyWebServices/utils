interface Truncate {
  (input: string, max: number): string;
}

const ELLIPSIS_CHAR = String.fromCharCode(8230);

/**
 * Truncate a string to a maximum length, adding an ellipsis if necessary.
 * @param input The string to truncate.
 * @param max The maximum length of the string.
 * @returns The truncated string.
 */

export const truncate = (input, max): Truncate =>
  input?.length - 1 > max
    ? `${input?.substring(0, max) + ELLIPSIS_CHAR}`
    : input;
