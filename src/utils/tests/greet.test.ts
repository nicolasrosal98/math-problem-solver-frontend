import { greet } from "../helper-functions/greet";

test("greet returns a string, greeting the passed name", () => {
  expect(greet("World")).toBe("Hello, World!");
  expect(greet("Richard")).toBe("Hello, Richard!");
  expect(greet("Academy Scholars")).toBe("Hello, Academy Scholars!");
});
