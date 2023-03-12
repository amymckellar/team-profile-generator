const Employee = require("../lib/Employee");

test("Create new employee", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("Set name", () => {
  const name = "Amy";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Set ID", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Set Email", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Get Name", () => {
  const testValue = "Amy";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Get ID", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Get Email", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test('getRole() should return "Employee"', () => {
  const testValue = "Employee";
  const e = new Employee("Amy", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
