import { truncate } from "./truncate";

describe("truncate", () => {
  it("truncates a string to a maximum length", () => {
    expect(truncate("Hello, world!", 5)).toBe("Hello…");
  });

  it("truncates a string to a maximum length, adding an ellipsis in the center", () => {
    expect(truncate("Hello, world!", 5, true)).toBe("He…d!");
  });

  it("returns the input string if it is shorter than the maximum length", () => {
    expect(truncate("Hello, world!", 20)).toBe("Hello, world!");
  });

  it("returns an empty string if the input is null or undefined or []", () => {
    expect(truncate("", 5)).toBe("");
    [null, undefined, []].forEach((falsyInput) =>
      expect(truncate(falsyInput, 5)).toBe("")
    );
  });

  it("returns the input as a string if it is false or NaN", () => {
    expect(truncate(false, 5)).toBe("false");
    expect(truncate(NaN, 5)).toBe("NaN");
  });

  it(`returns the input string if it is a number (and "0" if it's 0)`, () => {
    expect(truncate(1234567890, 5)).toBe("12345…");
    expect(truncate(0, 5)).toBe("0");
  });

  it("returns empty brackets if input is a plain empty object", () => {
    expect(truncate({}, 5)).toBe("{}");
  });

  it("returns number as a string if input is a number", () => {
    expect(truncate(1234567890, 5)).toBe("12345…");
    expect(truncate(0, 5)).toBe("0");
  });
});
