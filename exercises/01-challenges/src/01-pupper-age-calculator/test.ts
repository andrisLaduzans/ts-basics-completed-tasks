import something_else from "./index";

describe("pupperAgeCalculator function", () => {
  test("should return dog's age in dog years", () => {
    expect(something_else(1)).toEqual(
      "Your doggie is 7 years old in dog years!"
    );
    expect(something_else(10)).toEqual(
      "Your doggie is 70 years old in dog years!"
    );
    expect(something_else(15)).toEqual(
      "Your doggie is 105 years old in dog years!"
    );
  });
});
