const Employee = require("../lib/Employee");
// The test to create a new Employee
test("Create new employee", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});
// The test to set the Employee name
test("Set name", () => {
  const name = "Amy";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});
// The test to set the Employee ID
test("Set ID", () => {
  const testValue = 100;
  const e = new Employee("Amy", testValue);
  expect(e.id).toBe(testValue);
});
// The test to set the Employee email
test("Set Email", () => {
  const testValue = "amy_mckellar@yahoo.com";
  const e = new Employee("Amy", 1, testValue);
  expect(e.email).toBe(testValue);
});
// The test to get Employee name
test("Get Name", () => {
  const testValue = "Amy";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});
// The test to get the Employee ID
test("Get ID", () => {
  const testValue = 100;
  const e = new Employee("Amy", testValue);
  expect(e.getId()).toBe(testValue);
});
// The test to get the Employee email
test("Get Email", () => {
  const testValue = "amy_mckellar@yahoo.com";
  const e = new Employee("Amy", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});
// The test for the Employee role
test('Return "Employee"', () => {
  const testValue = "Employee";
  const e = new Employee("Amy", 1, "amy_mckellar@yahoo.com");
  expect(e.getRole()).toBe(testValue);
});
