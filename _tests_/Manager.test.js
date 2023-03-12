const Manager = require("../lib/Manager");

test("Set office number", () => {
  const testValue = 100;
  const e = new Manager("Amy", 1, "amy_mckellar@yahoo.com", testValue);
});

test("Return Manager", () => {
  const testValue = "Manager";
  const e = new Manager("Amy", 1, "amy_mckellar@yahoo.com", 100);
  expect(e.getRole()).toBe(testValue);
});
