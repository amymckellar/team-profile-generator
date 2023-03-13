const Engineer = require("../_tests_/Engineer");

test("Set GitHUb account", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Amy", 1, "amy_mckellar@yahoo.com", testValue);
});

test("Return Engineer", () => {
  const testValue = "Engineer";
  const e = new Engineer("Amy", 1, "amy_mckellar@yahoo.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Get GitHub username", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Amy", 1, "amy_mckellar@yahoo.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
