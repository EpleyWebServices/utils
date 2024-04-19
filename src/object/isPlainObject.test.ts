import { isPlainObject } from "./isPlainObject";

describe("isPlainObject", () => {
  it("Checks if a value is a plain JavaScript (or JSON) object.", () => {
    expect(
      [{}, { key: "value" }, new Object(), Object.create(null)].every(
        (negativeCase) => isPlainObject(negativeCase)
      )
    ).toBe(true);

    expect(
      [
        "{}",
        () => {},
        [],
        null,
        undefined,
        123,
        "string",
        true,
        false,
        new Date(),
        new RegExp("regex"),
      ].every((negativeCase) => isPlainObject(negativeCase))
    ).toBe(false);
  });
});
