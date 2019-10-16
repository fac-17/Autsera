import { countStarsInPlace } from "./starsCounting";

//HARDCODED DATA THAT DEPENDS ON DATA, when data changes update tests
describe("countStarsInPlace", () => {
  it("returns an object with has and max", () => {
    expect(countStarsInPlace(0, [0]).has).not.toBeUndefined();
    expect(countStarsInPlace(0, [0]).max).not.toBeUndefined();
  });
  it("returns an object with has and max that have correct answers", () => {
    const stars = countStarsInPlace(0, [1, 24]);
    expect(stars.max).toBe(5);
    expect(stars.has).toBe(1);
  });
  it("returns an object with has and max that have correct answers with none completed", () => {
    const stars = countStarsInPlace(23, [1, 24]);
    expect(stars.max).toBe(3);
    expect(stars.has).toBe(1);
  });
});
