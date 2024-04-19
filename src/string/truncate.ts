import { isPlainObject } from "../object/isPlainObject";

const ELLIPSIS_CHAR = String.fromCharCode(8230);

type TruncateFunction = (
  input: any,
  max: number,
  removeCharsFromCenter?: boolean
) => string;

/**
 * Truncate a string to a maximum length, adding an ellipsis if necessary.
 * @param input The string to truncate.
 * @param max The maximum length of the string.
 * @returns The truncated string.
 */
export const truncate: TruncateFunction = (
  input,
  max,
  removeCharsFromCenter = false
) => {
  if (input === false) return "false";
  if (Number.isNaN(input)) return "NaN";
  if (Array.isArray(input) && input.length === 0) return "";
  if (isPlainObject(input)) input = JSON.stringify(input);
  if (input === 0) return "0";
  if (!input || input?.length === 0) return "";
  if (typeof input === "number") input = input.toString();
  return removeCharsFromCenter
    ? truncateCenter(input, max)
    : truncateEnd(input, max);
};

const truncateEnd: TruncateFunction = (input, max) => {
  if (input?.length <= max) return input;
  return `${input?.substring(0, max) + ELLIPSIS_CHAR}`;
};

const truncateCenter: TruncateFunction = (input, max) => {
  if (input?.length <= max) return input;

  const left = Math.floor(max / 2);
  const right = Math.ceil(left);
  return `${input.slice(0, left)}${ELLIPSIS_CHAR}${input.slice(
    input.length - right
  )}`;
};
