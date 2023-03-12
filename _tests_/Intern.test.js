const Intern = require("../lib/Intern");

test("Set school", () => {
  const testValue = "NSU";
  const e = new Intern("Amy", 1, "amy_mckellar@yahoo.com", testValue);
  expect(e.school).toBe(testValue);
});

test('Return Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("Amy", 1, "amy_mckellar@yahoo.com", "NSU");
  expect(e.getRole()).toBe(testValue);
});

test("Get school", () => {
  const testValue = "NSU";
  const e = new Intern("Amy", 1, "amy_mckellar@yahoo.com", testValue);
});
