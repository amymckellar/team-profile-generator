const Manager = require("../lib/Manager");
// the test to set the office number
test("Set office number", () => {
  const testValue = 100;
  const e = new Manager("Amy", 1, "amy_mckellar@yahoo.com", testValue);
});
// the test to return the role
test("Return Manager", () => {
  const testValue = "Manager";
  const e = new Manager("Amy", 1, "amy_mckellar@yahoo.com", 100);
  expect(e.getRole()).toBe(testValue);
});
// the test to get the office number
test("Get office number", () => {
  const testValue = 100;
  const e = new Manager("Amy", 1, "amy_mckellar@yahoo.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
