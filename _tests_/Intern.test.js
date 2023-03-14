const Intern = require("../lib/Intern");
// THe test to set the school name
test("Set school", () => {
  const testValue = "NSU";
  const e = new Intern("Amy", 1, "amy_mckellar@yahoo.com", testValue);
  expect(e.school).toBe(testValue);
});
// The test to return what the school name is
test('Return Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("Amy", 1, "amy_mckellar@yahoo.com", "NSU");
  expect(e.getRole()).toBe(testValue);
});
// The test to get the school name
test("Get school", () => {
  const testValue = "NSU";
  const e = new Intern("Amy", 1, "amy_mckellar@yahoo.com", testValue);
});
