import { greet } from "./greet";

test("returns 'Hello Jane!' when called with 'Jane'", () => {
  const result = greet("Jane");
  expect(result).toBe("Hello Jane!");
});

test("returns 'Hello Coach!' when called with 'Thomas'", () => {
  const result = greet("Thomas");
  expect(result).toBe("Hello Coach!");
});
